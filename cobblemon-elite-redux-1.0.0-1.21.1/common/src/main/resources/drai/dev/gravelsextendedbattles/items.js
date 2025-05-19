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
	onPlate: "Wind",
    forcedForme: "Arceus-Wind",
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
  bloodgem: {
    name: "Blood Gem",
    spritenum: 3121,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Blood" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3121,
    gen: 5,
    isNonstandard: "Past"
  },
  bloodmemory: {
    name: "Blood Memory",
    spritenum: 3134,
    onMemory: "Blood",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Blood",
    itemUser: ["Silvally-Blood"],
    num: 3134,
    gen: 7,
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
  cosmicgem: {
    name: "Cosmic Gem",
    spritenum: 3111,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Cosmic" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3111,
    gen: 5,
    isNonstandard: "Past"
  },
  cosmicmemory: {
    name: "Cosmic Memory",
    spritenum: 3124,
    onMemory: "Cosmic",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Cosmic",
    itemUser: ["Silvally-Cosmic"],
    num: 3124,
    gen: 7,
    isNonstandard: "Past"
  },
  cosmiumz: {
    name: "Cosmium Z",
    spritenum: 3083,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Cosmic",
	onPlate: "Cosmic",
    forcedForme: "Arceus-Cosmic",
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
  cpuplate: {
    name: "CPU Plate",
    spritenum: 3100,
    onPlate: "Digital",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Digital") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Digital",
    num: 3100,
    gen: 4
  },
  crystalgem: {
    name: "Cosmic Gem",
    spritenum: 3112,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Crystal" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3112,
    gen: 5,
    isNonstandard: "Past"
  },
  crystalloniumz: {
    name: "Crystallonium Z",
    spritenum: 3084,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Crystal",
	onPlate: "Crystal",
    forcedForme: "Arceus-Crystal",
    num: 3084,
    gen: 7,
    isNonstandard: "Past"
  },
  crystalmemory: {
    name: "Crystal Memory",
    spritenum: 3125,
    onMemory: "Crystal",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Crystal",
    itemUser: ["Silvally-Crystal"],
    num: 3125,
    gen: 7,
    isNonstandard: "Past"
  },
  crystalplate: {
    name: "Crystal Plate",
    spritenum: 3099,
    onPlate: "Crystal",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Crystal") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Crystal",
    num: 3099,
    gen: 4
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
  cycloneplate: {
    name: "Cyclone Plate",
    spritenum: 3106,
    onPlate: "Wind",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Wind") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Wind",
    num: 3106,
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
  digitalgem: {
    name: "Digital Gem",
    spritenum: 3113,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Digital" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3113,
    gen: 5,
    isNonstandard: "Past"
  },
  digitalmemory: {
    name: "Digital Memory",
    spritenum: 3126,
    onMemory: "Digital",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Digital",
    itemUser: ["Silvally-Digital"],
    num: 3126,
    gen: 7,
    isNonstandard: "Past"
  },
  digitiumz: {
    name: "Digitium Z",
    spritenum: 3085,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Digital",
	onPlate: "Ditial",
    forcedForme: "Arceus-Digital",
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
	onPlate: "Eldritch",
    forcedForme: "Arceus-Eldritch",
    num: 3086,
    gen: 7,
    isNonstandard: "Past"
  },
  eldritchgem: {
    name: "Eldritch Gem",
    spritenum: 3120,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Eldritch" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3120,
    gen: 5,
    isNonstandard: "Past"
  },
  eldritchmemory: {
    name: "Eldritch Memory",
    spritenum: 3133,
    onMemory: "Eldritch",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Eldritch",
    itemUser: ["Silvally-Eldritch"],
    num: 3133,
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
  fissionplate: {
    name: "Fission Plate",
    spritenum: 3102,
    onPlate: "Nuclear",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Nuclear") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Nuclear",
    num: 3102,
    gen: 4
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
  galacticplate: {
    name: "Galactic Plate",
    spritenum: 3098,
    onPlate: "Cosmic",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Cosmic") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Cosmic",
    num: 3098,
    gen: 4
  },
  gunkplate: {
    name: "Gunk Plate",
    spritenum: 3104,
    onPlate: "Slime",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Slime") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Slime",
    num: 3104,
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
  ichorplate: {
    name: "Ichor Plate",
    spritenum: 3108,
    onPlate: "Blood",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Blood") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Blood",
    num: 3108,
    gen: 4
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
  lightgem: {
    name: "Light Gem",
    spritenum: 3114,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Light" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3114,
    gen: 5,
    isNonstandard: "Past"
  },
  lightmemory: {
    name: "Light Memory",
    spritenum: 3127,
    onMemory: "Light",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Light",
    itemUser: ["Silvally-Light"],
    num: 3127,
    gen: 7,
    isNonstandard: "Past"
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
  lumenplate: {
    name: "Lumen Plate",
    spritenum: 3101,
    onPlate: "Light",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Light") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Light",
    num: 3101,
    gen: 4
  },
  luxiumz: {
    name: "Luxium Z",
    spritenum: 3087,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Light",
	onPlate: "Light",
    forcedForme: "Arceus-Light",
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
  nucleargem: {
    name: "Nuclear Gem",
    spritenum: 3115,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Nuclear" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3115,
    gen: 5,
    isNonstandard: "Past"
  },
  nucleariumz: {
    name: "Nuclearium Z",
    spritenum: 3088,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Nuclear",
	onPlate: "Nuclear",
    forcedForme: "Arceus-Nuclear",
    num: 3088,
    gen: 7,
    isNonstandard: "Past"
  },
  nuclearmemory: {
    name: "Nuclear Memory",
    spritenum: 3128,
    onMemory: "Nuclear",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Nuclear",
    itemUser: ["Silvally-Nuclear"],
    num: 3128,
    gen: 7,
    isNonstandard: "Past"
  },
  penumbraplate: {
    name: "Penumbra Plate",
    spritenum: 3096,
    onPlate: "Shadow",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Shadow") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Shadow",
    num: 3096,
    gen: 4
  },
  plasticgem: {
    name: "Plastic Gem",
    spritenum: 3116,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Plastic" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3116,
    gen: 5,
    isNonstandard: "Past"
  },
  plasticinez: {
    name: "Plasticine Z",
    spritenum: 3089,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Plastic",
	onPlate: "Plastic",
    forcedForme: "Arceus-Plastic",
    num: 3089,
    gen: 7,
    isNonstandard: "Past"
  },
  plasticmemory: {
    name: "Plastic Memory",
    spritenum: 3129,
    onMemory: "Plastic",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Plastic",
    itemUser: ["Silvally-Plastic"],
    num: 3129,
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
  polymerplate: {
    name: "Polymer Plate",
    spritenum: 3103,
    onPlate: "Plastic",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Plastic") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Plastic",
    num: 3103,
    gen: 4
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
  questionmarkgem: {
    name: "Questionmark Gem",
    spritenum: 3110,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Questionmark" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3110,
    gen: 5,
    isNonstandard: "Past"
  },
  questionmarkiumz: {
    name: "Questionmarkium Z",
    spritenum: 3090,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Questionmark",
	onPlate: "Questionmark",
    forcedForme: "Arceus-Questionmark",
    num: 3090,
    gen: 7,
    isNonstandard: "Past"
  },
  questionmarkmemory: {
    name: "Questionmark Memory",
    spritenum: 3123,
    onMemory: "Questionmark",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Questionmark",
    itemUser: ["Silvally-Questionmark"],
    num: 3123,
    gen: 7,
    isNonstandard: "Past"
  },
  questionmarkplate: {
    name: "Questionmark Plate",
    spritenum: 3097,
    onPlate: "Questionmark",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Questionmark") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Questionmark",
    num: 3097,
    gen: 4
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
	onPlate: "Sound",
    forcedForme: "Arceus-Sound",
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
	onPlate: "Blood",
    forcedForme: "Arceus-Blood",
    num: 3095,
    gen: 7,
    isNonstandard: "Past"
  },
  shadowgem: {
    name: "Shadow Gem",
    spritenum: 3109,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Shadow" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3109,
    gen: 5,
    isNonstandard: "Past"
  },
  shadowmemory: {
    name: "Shadow Memory",
    spritenum: 3122,
    onMemory: "Shadow",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Shadow",
    itemUser: ["Silvally-Shadow"],
    num: 3122,
    gen: 7,
    isNonstandard: "Past"
  },
  sheetplate: {
    name: "Sheet Plate",
    spritenum: 3105,
    onPlate: "Sound",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Sound") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Sound",
    num: 3105,
    gen: 4
  },
  slimegem: {
    name: "Slime Gem",
    spritenum: 3117,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Slime" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3117,
    gen: 5,
    isNonstandard: "Past"
  },
  slimememory: {
    name: "Slime Memory",
    spritenum: 3130,
    onMemory: "Slime",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Slime",
    itemUser: ["Silvally-Slime"],
    num: 3130,
    gen: 7,
    isNonstandard: "Past"
  },
  soundgem: {
    name: "Sound Gem",
    spritenum: 3118,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Sound" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3118,
    gen: 5,
    isNonstandard: "Past"
  },
  soundmemory: {
    name: "Sound Memory",
    spritenum: 3131,
    onMemory: "Sound",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Sound",
    itemUser: ["Silvally-Sound"],
    num: 3131,
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
	onPlate: "Shadow",
    forcedForme: "Arceus-Shadow",
    num: 3091,
    gen: 7,
    isNonstandard: "Past"
  },
  unearthlyplate: {
    name: "Unearthly Plate",
    spritenum: 3107,
    onPlate: "Eldritch",
    onBasePowerPriority: 15,
    onBasePower(basePower, user, target, move) {
      if (move.type === "Eldritch") {
        return this.chainModify([4915, 4096]);
      }
    },
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 493 || pokemon.baseSpecies.num === 493) {
        return false;
      }
      return true;
    },
    forcedForme: "Arceus-Eldritch",
    num: 3107,
    gen: 4
  },
  visciumz: {
    name: "Viscium Z",
    spritenum: 3092,
    onTakeItem: false,
    zMove: true,
    zMoveType: "Slime",
	onPlate: "Slime",
    forcedForme: "Arceus-Slime",
    num: 3092,
    gen: 7,
    isNonstandard: "Past"
  },
  windgem: {
    name: "Wind Gem",
    spritenum: 3119,
    isGem: true,
    onSourceTryPrimaryHit(target, source, move) {
      if (target === source || move.category === "Status")
        return;
      if (move.type === "Wind" && source.useItem()) {
        source.addVolatile("gem");
      }
    },
    num: 3119,
    gen: 5,
    isNonstandard: "Past"
  },
  windmemory: {
    name: "Wind Memory",
    spritenum: 3132,
    onMemory: "Wind",
    onTakeItem(item, pokemon, source) {
      if (source && source.baseSpecies.num === 773 || pokemon.baseSpecies.num === 773) {
        return false;
      }
      return true;
    },
    forcedForme: "Silvally-Wind",
    itemUser: ["Silvally-Wind"],
    num: 3132,
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
