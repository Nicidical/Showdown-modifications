package drai.dev.gravelsextendedbattles;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.events.*;
import com.cobblemon.mod.common.api.fossil.*;
import com.cobblemon.mod.common.api.pokedex.*;
import com.cobblemon.mod.common.api.pokemon.*;
import com.cobblemon.mod.common.api.types.*;
import drai.dev.gravelsextendedbattles.interfaces.*;
import drai.dev.gravelsextendedbattles.loot.*;
import drai.dev.gravelsextendedbattles.mixin.*;
import drai.dev.gravelsextendedbattles.resorting.*;
import drai.dev.gravelsextendedbattles.resorting.nodes.*;
import drai.dev.gravelsextendedbattles.showdown.*;
import drai.dev.gravelsextendedbattles.starters.*;
import eu.midnightdust.lib.config.*;
import kotlin.Unit;
import net.minecraft.resources.*;

import java.io.*;
import java.util.*;
import java.util.logging.*;

public class GravelsExtendedBattles {

    public static final Map<ResourceLocation, Fossil> FOSSIL_MAP = new HashMap<>();
    public static List<ElementalType> NEW_TYPES = new ArrayList<>();
    public static boolean ICON_MIXIN_INIT = false;
    public static boolean ICON_WIDGET_INIT = false;
    public static final String MOD_ID = "gravels_extended_battles";
    public static Logger LOGGER = Logger.getLogger(MOD_ID);
    public static List<String> BANNED_LABELS;
    public static List<String> ALLOWED_LABELS;
    public static List<String> PASSWORDS;
    public static List<String> IMPLEMENTED_TYPES;
    public static int TYPE_COUNT = 18;
    public static boolean ADD_STARTERS = false;
    public static List<IEvolutionNode> SORTED_SPECIES = new ArrayList<>();
    public static IGravelmonConfig gravelmonConfig;

    public static void init(String minecraftFolder) {
        MidnightConfig.init("gravelmon", GravelmonConfig.class);
        gravelmonConfig = new GravelmonConfig();
        BANNED_LABELS = gravelmonConfig.getBannedLabels();
        ALLOWED_LABELS = gravelmonConfig.getAllowedLabels();
        IMPLEMENTED_TYPES = gravelmonConfig.getImplementedTypes();
        ADD_STARTERS = gravelmonConfig.getShouldAddStarters();
        PASSWORDS = gravelmonConfig.getPasswords();
        ShowdownFileManager.injectShowdown(minecraftFolder);

        PokemonSpecies.INSTANCE.getObservable().subscribe(Priority.LOWEST, pokemonSpecies -> {
            speciesFinished = true;
            applyGravelmonExtensions();
            return Unit.INSTANCE;
        });

        Fossils.INSTANCE.getObservable().subscribe(Priority.LOWEST, fossils -> {
            fossils.all().forEach(fossil -> {
                var identifiers = fossil.getFossils().stream().map(fossilPredicate-> ((RegistryLikeIdentifierConditionAccessor)fossilPredicate.component1()).getIdentifier()).toList();
                for (ResourceLocation identifier : identifiers) {
                    FOSSIL_MAP.put(identifier, fossil);
                }
            });
            GravelmonFossilManager.scanLootPools();
            return Unit.INSTANCE;
        });

        Dexes.INSTANCE.getObservable().subscribe(Priority.LOWEST, dexes -> {
            dexesFinished = true;
            applyGravelmonExtensions();
            return Unit.INSTANCE;
        });

        CobblemonEvents.EVOLUTION_COMPLETE.subscribe(Priority.NORMAL, evolutionCompleteEvent -> {
            if(evolutionCompleteEvent.component1().hasLabels("digimon")) evolutionCompleteEvent.component1().initializeMoveset(true);
            return Unit.INSTANCE;
        });
    }

    private static boolean speciesFinished = false;
    private static boolean dexesFinished = false;

    public static void applyGravelmonExtensions(){
        if(!speciesFinished || !dexesFinished)  return;
        var pokemonSpecies = PokemonSpecies.INSTANCE;
        var dexes = Dexes.INSTANCE;
        SpeciesManager.processFormEvolutionAdditions();
        SpeciesManager.processTypeChanges();
        SpeciesManager.processFormBaseScaleAdditions();
        GravelmonPokedexManager.processPokedexBans(dexes);
        SpeciesManager.banPokemon(pokemonSpecies, ((GravelmonPokemonSpeciesAccessor) (Object) pokemonSpecies));

        GravelmonStarterManager.processStarters();
        if(gravelmonConfig.getAutomaticMoveInsertion()) GravelmonMoveSubstitution.substituteMoves();

        //TODO filter dex entries out for banned pokemon, banned/locked regions, and resorting the national dex
        if (gravelmonConfig.getEnableDexResort()) {
            GravelmonPokedexResorter.resort(pokemonSpecies);
        }

        speciesFinished = false;
        dexesFinished = false;
    }
}
