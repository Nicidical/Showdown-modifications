"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var items_exports = {};
__export(items_exports, {
  Items: () => Items
});
module.exports = __toCommonJS(items_exports);
const Items = {
  aeriumz: {
    name: "Aerium Z",
    spritenum: 3094,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Wind",
    num: 3094,
    gen: 7,
    isNonstandard: "Past"
  },
  analysismap: {
    name: "Analysis Map",
    fling: {
      basePower: 0
    },
    spritenum: 3016,
    onModifyAtk(atk, user) {
      if (user.species.name === "Terubim") {
        return this.chainModify(2);
      }
	},
    itemUser: ["Terubim"],
    num: 3016,
    gen: 8,
    isNonstandard: "Past"
  },
  boltorb: {
    name: "Bolt Orb",
    spritenum: 3000,
    fling: {
      basePower: 30,
      status: "par"
    },
    onResidualOrder: 28,
    onResidualSubOrder: 3,
    onResidual(pokemon) {
      pokemon.trySetStatus("par", pokemon);
    },
    num: 3000,
    gen: 4
  },
  clouddust: {
    name: "Cloud dust",
    fling: {
      basePower: 10
    },
    spritenum: 3001,
    onSwitchIn(pokemon) {
      this.effectState.switchingIn = true;
    },
    onStart(pokemon) {
      if (this.effectState.switchingIn) {
        this.add("-item", pokemon, "Cloud Dust");
        this.effectState.switchingIn = false;
      }
      this.eachEvent("WeatherChange", this.effect);
    },
    onEnd(pokemon) {
      this.eachEvent("WeatherChange", this.effect);
    },
    suppressWeather: true,
    num: 3001,
    gen: 9,
    isNonstandard: "Past"
  },
  cosmiumz: {
    name: "Cosmium Z",
    spritenum: 3083,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Cosmic",
    num: 3083,
    gen: 7,
    isNonstandard: "Past"
  },
  corruptedseed: {
    name: "Corrupted Seed",
    spritenum: 3002,
    fling: {
      basePower: 30
    },
    onSourceTryHeal(damage, target, source, effect) {
      this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
      const canOoze = ["drain", "leechseed", "strengthsap"];
      if (canOoze.includes(effect.id)) {
        this.damage(damage);
        return 0;
      }
    },
    num: 3002,
    gen: 2
  },
  crystalloniumz: {
    name: "Crystallonium Z",
    spritenum: 3084,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Crystal",
    num: 3084,
    gen: 7,
    isNonstandard: "Past"
  },
  cursedsash: {
    name: "Cursed Sash",
    spritenum: 3018,
    fling: {
      basePower: 10
    },
    onDamagePriority: -40,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp) {
        this.add("-activate", target, "item: Cursed Sash");
        this.boost({ def: -2, spd: -2 }, target);
        target.useItem();
        return 0;
      }
	},
    num: 3018,
    gen: 4
  },
  darkrock: {
    name: "Dark Rock",
    spritenum: 3003,
    fling: {
      basePower: 60
    },
    num: 3003,
    gen: 4
  },
  deltavolcaronaarmor: {
    name: "Delta Volcarona Armor",
    spritenum: 3026,
    onTakeItem(item, pokemon, source) {
      if (pokemon.baseSpecies.num === 637 && pokemon.species.name === "Volcarona-Delta-Armored") {
        // Revert to "Volcarona-Delta" if item is removed from "Volcarona-Delta-Armored"
        pokemon.formeChange("Volcarona-Delta", item, true);
        this.add('-formechange', pokemon, 'Volcarona-Delta');
        return true;
      }
      return false;
	},
    forcedForme: "Volcarona-Delta-Armored",
    itemUser: ["Volcarona-Delta-Armored"],
    num: 3026,
    gen: 8
  },
  digitiumz: {
    name: "Digitium Z",
    spritenum: 3085,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Digital",
    num: 3085,
    gen: 7,
    isNonstandard: "Past"
  },
  eldrichiumz: {
    name: "Eldrichium Z",
    spritenum: 3086,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Eldritch",
    num: 3086,
    gen: 7,
    isNonstandard: "Past"
  },
  everlite: {
    name: "EVerlite",
    spritenum: 3004,
    fling: {
      basePower: 40
    },
    onModifyDefPriority: 2,
    onModifyDef(def, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    num: 3004,
    gen: 5
  },
  falloutiumz: {
    name: "Falloutium Z",
    spritenum: 3082,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Fallout",
    num: 3082,
    gen: 7,
    isNonstandard: "Past"
  },
  flygonarmor: {
    name: "Flygon Armor",
    spritenum: 3023,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 330 || pokemon.baseSpecies.num === 330) {
        return false;
      }
      return true;
    },
    forcedForme: "Flygon-Armored",
    itemUser: ["Flygon-Armored"],
    num: 3023,
    gen: 8
  },
  forecastmap: {
    name: "Forecast Map",
    fling: {
      basePower: 0
    },
    spritenum: 3017,
	onModifySpD(spd, user) {
      if (user.species.name === "Terubim") {
        return this.chainModify(2); // Doubles the Special Defense stat
      }
	},
    itemUser: ["Terubim"],
    num: 3017,
    gen: 8,
    isNonstandard: "Past"
  },
  foulrock: {
    name: "Foul Rock",
    spritenum: 3005,
    fling: {
      basePower: 60
    },
    num: 3005,
    gen: 4
  },
  hafliberry: {
    name: "Hafli Berry",
    spritenum: 3006,
    isBerry: true,
    naturalGift: {
      basePower: 60,
      type: "Nuclear"
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (move.type === "Nuclear" && target.getMoveHitData(move).typeMod > 0) {
        const hitSub = target.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
        if (hitSub)
          return;
        if (target.eatItem()) {
          this.debug("-50% reduction");
          this.add("-enditem", target, this.effect, "[weaken]");
          return this.chainModify(0.5);
        }
      }
    },
    onEat() {
    },
    num: 3006,
    gen: 4
  },
  hailstone: {
    name: "Hailstone",
    spritenum: 3019,
    fling: {
      basePower: 60
    },
	onStart(source) {
      this.field.setWeather("hail");
    },
    num: 3019,
    gen: 8,
    isNonstandard: "Past"
  },
  iceshard: {
    name: "Ice Shard",
    spritenum: 3007,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Ice") {
        return this.chainModify([4915, 4096]);
      }
    },
    num: 3007,
    gen: 2
  },
  iveolite: {
    name: "Iveolite",
    spritenum: 3008,
    fling: {
      basePower: 40
    },
    onModifyAtkPriority: 2,
    onModifyAtk(atk, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    onModifySpaPriority: 2,
    onModifySpa(spa, pokemon) {
      if (pokemon.baseSpecies.nfe) {
        return this.chainModify(1.5);
      }
    },
    num: 3008,
    gen: 5
  },
  longclub: {
    name: "Long Club",
    fling: {
      basePower: 60
    },
    spritenum: 3009,
    onModifyCritRatio(critRatio, user) {
      if (["terathwack"].includes(this.toID(user.baseSpecies.baseSpecies))) {
        return critRatio + 2;
      }
    },
    itemUser: ["Terathwack"],
    num: 3009,
    gen: 9,
    isNonstandard: "Past"
  },
  luxiumz: {
    name: "Luxium Z",
    spritenum: 3087,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Light",
    num: 3087,
    gen: 7,
    isNonstandard: "Past"
  },
  mewtwoarmor: {
    name: "Mewtwo Armor",
    spritenum: 3027,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 150 || pokemon.baseSpecies.num === 150) {
        return false;
      }
      return true;
    },
    forcedForme: "Mewtwo-Armored",
    itemUser: ["Mewtwo-Armored"],
    num: 3027,
    gen: 8
  },
  mossshard: {
    name: "Moss Shard",
    spritenum: 3010,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Grass") {
        return this.chainModify([4915, 4096]);
      }
    },
    num: 3010,
    gen: 2
  },
  nucleariumz: {
    name: "Nuclearium Z",
    spritenum: 3088,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Nuclear",
    num: 3088,
    gen: 7,
    isNonstandard: "Past"
  },
  plasticinez: {
    name: "Plasticine Z",
    spritenum: 3089,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Plastic",
    num: 3089,
    gen: 7,
    isNonstandard: "Past"
  },
  polishedsphere: {
    name: "Polished Sphere",
    spritenum: 3013,
    fling: {
      basePower: 30
    },
    onModifySpDPriority: 2,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmantis") {
        return this.chainModify(1.2);
      }
    },
	onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmantis") {
        return this.chainModify(1.2);
      }
    },
    itemUser: ["Enigmantis"],
    num: 3013,
    gen: 3
  },
  prettyribbon: {
    name: "Pretty Ribbon",
    spritenum: 3011,
    fling: {
      basePower: 30
    },
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Fairy") {
        return this.chainModify([4915, 4096]);
      }
    },
    num: 3011,
    gen: 2
  },
  questionmarkiumz: {
    name: "Questionmarkium Z",
    spritenum: 3090,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Questionmark",
    num: 3090,
    gen: 7,
    isNonstandard: "Past"
  },
  raggedpebble: {
    name: "Ragged Pebble",
    spritenum: 3012,
    fling: {
      basePower: 30
    },
    onModifySpDPriority: 2,
    onModifySpD(spd, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmite") {
        return this.chainModify(1.2);
      }
    },
	onModifySpAPriority: 1,
    onModifySpA(spa, pokemon) {
      if (pokemon.baseSpecies.name === "Enigmite") {
        return this.chainModify(1.2);
      }
    },
    itemUser: ["Enigmite"],
    num: 3012,
    gen: 3
  },
  resoniumz: {
    name: "Resonium Z",
    spritenum: 3093,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Sound",
    num: 3093,
    gen: 7,
    isNonstandard: "Past"
  },
  sanguiniumz: {
    name: "Sanguinium Z",
    spritenum: 3095,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Blood",
    num: 3095,
    gen: 7,
    isNonstandard: "Past"
  },
  spicycurry: {
    name: "Spicy Curry",
    spritenum: 3021,
    fling: {
      basePower: 30,
      status: "brn"
    },
    onResidualOrder: 28,
    onResidualSubOrder: 3,
    onResidual(pokemon) {
      pokemon.trySetStatus("brn", pokemon);
    },
	onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move && move.type === "Fire" && !user.hasType("Fire")) {
        return this.chainModify([5120, 4096]);
      }
	},
    num: 3021,
    gen: 4
  },
  thirdeye: {
    name: "Third Eye",
    fling: {
      basePower: 20
    },
    spritenum: 3014,
    onStart(pokemon) {
      for (const target of pokemon.foes()) {
        if (target.ability) {
          this.add("-item", target, target.getAbility().name, "[from] item: X-Ray Specs", "[of] " + pokemon, "[identify]");
        }
      }
    },
    num: 3014,
    gen: 9,
    isNonstandard: "Past"
  },
  totemofundying: {
    name: "Totem of Undying",
    spritenum: 3020,
    fling: {
      basePower: 10
    },
    onDamagePriority: -40,
    onDamage(damage, target, source, effect) {
      if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === "Move") {
        if (target.useItem()) {
          return target.hp - 1;
        }
      }
    },
    num: 3020,
    gen: 4
  },
  tyranitararmor: {
    name: "Tyranitar Armor",
    spritenum: 3022,
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 248 || pokemon.baseSpecies.num === 248) {
        return false;
      }
      return true;
    },
    forcedForme: "Tyranitar-Armored",
    itemUser: ["Tyranitar-Armored"],
    num: 3022,
    gen: 8
  },
  umbriumz: {
    name: "Umbrium Z",
    spritenum: 3091,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Shadow",
    num: 3091,
    gen: 7,
    isNonstandard: "Past"
  },
  visciumz: {
    name: "Viscium Z",
    spritenum: 3092,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Slime",
    num: 3092,
    gen: 7,
    isNonstandard: "Past"
  },
  xrayspecs: {
    name: "X-Ray Specs",
    fling: {
      basePower: 10
    },
    spritenum: 3015,
    onStart(pokemon) {
      for (const target of pokemon.foes()) {
        if (target.item) {
          this.add("-item", target, target.getItem().name, "[from] item: X-Ray Specs", "[of] " + pokemon, "[identify]");
        }
      }
    },
    num: 3015,
    gen: 9,
    isNonstandard: "Past"
  }
};
//# sourceMappingURL=items.js.map
