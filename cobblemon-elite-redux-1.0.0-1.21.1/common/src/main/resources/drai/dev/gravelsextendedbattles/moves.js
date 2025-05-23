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
var moves_exports = {};
__export(moves_exports, {
  Moves: () => Moves
});
module.exports = __toCommonJS(moves_exports);
const Moves = {
  /* NEXT UP: SKETCH (166), GEN 1 DONE */
  absorb: {
    num: 71,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    name: "Absorb",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onHit(target, source) {
      let i;
      for (i in target.boosts) {
        source.boosts[i] = target.boosts[i];
      }
      const volatilesToCopy = ["focusenergy", "gmaxchistrike", "laserfocus"];
      for (const volatile of volatilesToCopy) {
        if (target.volatiles[volatile]) {
          source.addVolatile(volatile);
          if (volatile === "gmaxchistrike")
            source.volatiles[volatile].layers = target.volatiles[volatile].layers;
        } else {
          source.removeVolatile(volatile);
        }
      }
      this.add("-copyboost", source, target, "[from] move: Absorb");
    },
    secondary: null,
    target: "normal",
    type: "Grass",
    contestType: "Clever"
  },
  acid: {
    inherit: true,
    basePower: 70,
    pp: 20,
    secondary: {
      chance: 30,
      boosts: {
        spd: -1
      }
    },
    ignoreImmunity: { "Poison": true },
    onEffectiveness(typeMod, target, type, move) {
      if (!target)
        return;
      if (target.hasType("Steel"))
        return 1;
    }
  },
  agility: {
    inherit: true,
    pp: 20
  },
  aurorabeam: {
    inherit: true,
    flags: { protect: 1, mirror: 1, metronome: 1, pulse: true },
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      }
    }
  },
  barrage: {
    inherit: true,
    accuracy: 100,
    basePower: 25,
    pp: 15,
    type: "Steel"
  },
  barrier: {
    num: 112,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Barrier",
    pp: 20,
    priority: 0,
    flags: { snatch: 1, metronome: 1 },
    sideCondition: "barrier",
    onTry() {
      return this.field.isTerrain(["psychic"]);
    },
    condition: {
      duration: 5,
      durationCallback(target, source, effect) {
        if (source?.hasItem("lightclay")) {
          return 8;
        }
        return 5;
      },
      onAnyModifyDamage(damage, source, target, move) {
        if (target !== source && this.effectState.target.hasAlly(target)) {
          if (target.side.getSideCondition("reflect") && this.getCategory(move) === "Physical" || target.side.getSideCondition("lightscreen") && this.getCategory(move) === "Special") {
            return;
          }
          if (!target.getMoveHitData(move).crit && !move.infiltrates) {
            this.debug("Barrier weaken");
            if (this.activePerHalf > 1)
              return this.chainModify([2732, 4096]);
            return this.chainModify(0.5);
          }
        }
      },
      onSideStart(side) {
        this.add("-sidestart", side, "move: Barrier");
      },
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 10,
      onSideEnd(side) {
        this.add("-sideend", side, "move: Barrier");
      }
    },
    secondary: null,
    target: "allySide",
    type: "Psychic",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cool"
  },
  bind: {
    inherit: true,
    accuracy: 100,
    basePower: 50,
    category: "Special",
    pp: 10
  },
  blizzard: {
    inherit: true,
    accuracy: 85,
    flags: { protect: 1, mirror: 1, metronome: 1, wind: 1, weather: 1 },
    secondary: {
      chance: 30,
      status: "fbt"
    }
  },
  boneclub: {
    inherit: true,
    accuracy: 100,
    basePower: 80,
    pp: 15,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    }
  },
  bonemerang: {
    inherit: true,
    accuracy: 100,
    basePower: 45,
    flags: { protect: 1, mirror: 1, metronome: 1, bone: 1 },
  },
  bubble: {
    inherit: true,
    basePower: 55,
    pp: 15,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    }
  },
  bubblebeam: {
    inherit: true,
    basePower: 25,
    flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1 },
    multihit: [2, 5],
    secondary: null
  },
  clamp: {
    inherit: true,
    accuracy: 90,
    basePower: 50,
    pp: 10
  },
  cometpunch: {
    inherit: true,
    accuracy: 100,
    basePower: 15,
    pp: 10,
    priority: 1
  },
  confuseray: {
    inherit: true,
    pp: 5
  },
  confusion: {
    inherit: true,
    pp: 20,
    secondary: {
      chance: 100,
      volatileStatus: "confusion"
    }
  },
  constrict: {
    inherit: true,
    basePower: 60,
    pp: 15,
    secondary: {
      chance: 100,
      boosts: {
        spe: -1
      }
    }
  },
  conversion: {
    inherit: true,
    pp: 20,
    onHit(target) {
      const type = this.dex.moves.get(target.moveSlots[0].id).type;
      if (target.hasType(type) || !target.setType(type))
        return false;
      this.add("-start", target, "typechange", type);
    },
    boosts: {
      spa: 1,
      spe: 1
    }
  },
  crabhammer: {
    inherit: true,
    accuracy: 100,
    secondary: {
      chance: 10,
      status: "bld"
    },
    target: "normal",
    type: "Water",
    contestType: "Tough"
  },
  cut: {
    inherit: true,
    accuracy: 100,
    basePower: 60,
    category: "Physical",
    isNonstandard: "Past",
    pp: 20,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1, field: 1 },
    willCrit: true,
    secondary: {
      chance: 10,
      status: "bld"
    },
    type: "Steel"
  },
  defensecurl: {
    inherit: true,
    pp: 20,
  },
  dig: {
    inherit: true,
    basePower: 110,
    pp: 10,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      nonsky: 1,
      metronome: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1,
      field: 1
    },
    condition: {
      duration: 2,
      onImmunity(type, pokemon) {
        if (type === "sandstorm" || type === "hail")
          return false;
      },
      onInvulnerability(target, source, move) {
        if (["earthquake", "magnitude", "fissure"].includes(move.id)) {
          return;
        }
        return false;
      },
      onSourceModifyDamage(damage, source, target, move) {
        if (move.id === "earthquake" || move.id === "magnitude" || move.id === "fissure") {
          return this.chainModify(2);
        }
      }
    }
  },
  dizzypunch: {
    inherit: true,
    basePower: 85
  },
  doubleedge: {
    inherit: true,
    basePower: 130,
    pp: 10
  },
  doublekick: {
    inherit: true,
    basePower: 45,
    pp: 20,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, kick: 1 }
  },
  doubleslap: {
    inherit: true,
    accuracy: 100,
    basePower: 25,
    secondary: {
      chance: 10,
      volatileStatus: "confusion"
    }
  },
  dragonrage: {
    num: 82,
    accuracy: 100,
    basePower: 80,
    category: "Special",
    isNonstandard: "Past",
    name: "Dragon Rage",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onEffectiveness(typeMod, target, type, move) {
      if (move.type !== "Dragon")
        return;
      if (!target)
        return;
      if (!target.runImmunity("Dragon")) {
        if (target.hasType("Fairy"))
          return 0;
      }
    },
    ignoreImmunity: { "Dragon": true },
    secondary: null,
    target: "normal",
    type: "Dragon",
    contestType: "Cool"
  },
  dreameater: {
    inherit: true,
    basePower: 120
  },
  drillpeck: {
    inherit: true,
    basePower: 90,
    flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1, horn: 1 },
    critRatio: 2,
    secondary: {
      chance: 10,
      status: "bld"
    }
  },
  eggbomb: {
    inherit: true,
    accuracy: 100,
    flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1, throw: 1 },
    secondary: {
      chance: 30,
      status: "brn"
    },
    onBasePower(basePower) {
      if (this.field.getPseudoWeather("gravity")) {
        return this.chainModify(1.5);
      }
    },
    type: "Fire"
  },
  ember: {
    inherit: true,
    basePower: 20,
    pp: 20,
    secondary: {
      chance: 100,
      status: "brn"
    }
  },
  fireblast: {
    inherit: true,
    secondary: {
      chance: 30,
      status: "brn"
    }
  },
  firepunch: {
    inherit: true,
    basePower: 85
  },
  firespin: {
    inherit: true,
    accuracy: 90,
    basePower: 50,
    pp: 10
  },
  fissure: {
    inherit: true,
    accuracy: 85,
    basePower: 120,
    flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
    ohko: false,
    target: "allAdjacentFoes"
  },
  flash: {
    num: 148,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    isNonstandard: "Past",
    name: "Flash",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, field: 1 },
    secondary: {
      chance: 50,
      boosts: {
        atk: -1
      }
    },
    target: "normal",
    type: "Electric",
    zMove: { boost: { evasion: 1 } },
    contestType: "Beautiful"
  },
  fly: {
    inherit: true,
    accuracy: 100,
    basePower: 110,
    flags: {
      contact: 1,
      charge: 1,
      protect: 1,
      mirror: 1,
      gravity: 1,
      distance: 1,
      metronome: 1,
      nosleeptalk: 1,
      noassist: 1,
      failinstruct: 1,
      wind: 1,
      field: 1
    }
  },
  focusenergy: {
    inherit: true,
    pp: 20
  },
  furyattack: {
    inherit: true,
    accuracy: 100,
    basePower: 25,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, horn: 1 },
    critRatio: 2,
    multihit: [2, 5]
  },
  furyswipes: {
    inherit: true,
    accuracy: 100,
    basePower: 20,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
    critRatio: 2
  },
  glare: {
    inherit: true,
    pp: 20
  },
  growl: {
    inherit: true,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    pp: 15,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1 },
    boosts: null,
    secondary: {
      chance: 100,
      boosts: {
        atk: -1
      },
    }
  },
  guillotine: {
    inherit: true,
    accuracy: 80,
    basePower: 120,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
    critRatio: 2,
    ohko: false,
    secondary: {
      chance: 20,
      status: "bld"
    },
    type: "Bug"
  },
  gust: {
    inherit: true,
    pp: 20,
    priority: 0
  },
  harden: {
    inherit: true,
    pp: 20
  },
  headbutt: {
    inherit: true,
    basePower: 85,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, field: 1 }
  },
  highjumpkick: {
    inherit: true,
    flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, metronome: 1, kick: 1 }
  },
  hornattack: {
    inherit: true,
    basePower: 85,
    pp: 15,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, horn: 1 },
    secondary: {
      chance: 10,
      status: "bld"
    }
  },
  horndrill: {
    inherit: true,
    accuracy: 90,
    basePower: 120,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, horn: 1 },
    ignoreAbility: true,
    ignoreDefensive: true,
    ignoreEvasion: true,
    critRatio: 2,
    ohko: false,
    secondary: {
      chance: 20,
      status: "bld"
    }
  },
  hydropump: {
    inherit: true,
    flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1 }
  },
  hyperbeam: {
    inherit: true,
    basePower: 160,
    flags: { recharge: 1, protect: 1, mirror: 1, metronome: 1, pulse: 1 }
  },
  hyperfang: {
    inherit: true,
    accuracy: 100,
    basePower: 85,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    }
  },
  icebeam: {
    inherit: true,
    flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1 },
    secondary: {
      chance: 10,
      status: "fbt"
    }
  },
  icepunch: {
    inherit: true,
    basePower: 85
  },
  jumpkick: {
    inherit: true,
    flags: { contact: 1, protect: 1, mirror: 1, gravity: 1, metronome: 1, kick: 1 },
  },
  karatechop: {
    inherit: true,
    basePower: 90,
    pp: 10,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 }
  },
  kinesis: {
    num: 134,
    accuracy: 100,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Kinesis",
    pp: 10,
    priority: 1,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
    onTryHit(target, source) {
      const item = target.takeItem();
        if (!item) { 
          return false; 
        }
    },
    onAfterHit(target, source) {
      if (source.hp) {
        const item = target.takeItem();
        if (item) {
          this.add("-enditem", target, item.name, "[from] move: Kinesis", "[of] " + source);
        }
      }
    },
    secondary: {
      chance: 100,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Psychic",
    zMove: { boost: { evasion: 1 } },
    contestType: "Clever"
  },
  lick: {
    inherit: true,
    basePower: 60,
    pp: 20,
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    }
  },
  leechlife: {
    inherit: true,
    flags: { contact: 1, protect: 1, mirror: 1, heal: 1, metronome: 1, bite: 1 },
  },
  lovelykiss: {
    inherit: true,
    accuracy: 85
  },
  lowkick: {
    inherit: true,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, kick: 1 },
  },
  meditate: {
    inherit: true,
    pp: 20,
    boosts: {
      atk: 1,
      spd: 1
    }
  },
  megadrain: {
    inherit: true,
    basePower: 50,
    drain: [3, 4],
    contestType: "Clever"
  },
  megakick: {
    inherit: true,
    accuracy: 100,
    basePower: 95,
    pp: 15,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, kick: 1 }
  },
  mimic: {
    inherit: true,
    pp: 1
  },
  mist: {
    inherit: true,
    pp: 20
  },
  payday: {
    inherit: true,
    basePower: 60
  },
  peck: {
    inherit: true,
    basePower: 25,
    pp: 20,
    flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1, horn: 1 },
    multihit: [2, 5]
  },
  petaldance: {
    inherit: true,
    pp: 5
  },
  pinmissile: {
    inherit: true,
    accuracy: 100
  },
  poisongas: {
    inherit: true,
    accuracy: 100,
    basePower: 65,
    category: "Special",
    pp: 15,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    secondary: {
      chance: 20,
      status: "psn"
    }
  },
  poisonpowder: {
    inherit: true,
    pp: 20
  },
  poisonsting: {
    inherit: true,
    basePower: 40,
    pp: 15,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    secondary: {
      chance: 10,
      status: "psn"
    }
  },
  pound: {
    inherit: true,
    pp: 20
  },
  psybeam: {
    inherit: true,
    flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1 },
    secondary: {
      chance: 100,
      boosts: {
        spa: -1
      },
    }
  },
  psychic: {
    inherit: true,
    pp: 15,
    secondary: {
      chance: 20,
      boosts: {
        spd: -1
      }
    }
  },
  psywave: {
    num: 149,
    accuracy: 100,
    basePower: 40,
    category: "Special",
    isNonstandard: "Past",
    name: "Psywave",
    pp: 15,
    priority: 1,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "confusion"
    },
    target: "normal",
    type: "Psychic",
    contestType: "Clever"
  },
  quickattack: {
    inherit: true,
    pp: 20,
    priority: 2
  },
  rage: {
    num: 99,
    accuracy: 100,
    basePower: 120,
    category: "Physical",
    name: "Rage",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, failinstruct: 1 },
    self: {
      volatileStatus: "lockedmove"
    },
    onAfterMove(pokemon) {
      if (pokemon.volatiles["lockedmove"] && pokemon.volatiles["lockedmove"].duration === 1) {
        pokemon.removeVolatile("lockedmove");
      }
    },
    secondary: null,
    target: "randomNormal",
    type: "Fighting",
    contestType: "Tough"
  },
  razorleaf: {
    inherit: true,
    accuracy: 100,
    pp: 20,
    willCrit: true,
    secondary: {
      chance: 10,
      status: "bld"
    }
  },
  razorwind: {
    num: 13,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    isNonstandard: "Past",
    name: "Razor Wind",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, slicing: 1 },
    onModifyPriority(priority, pokemon) {
      console.log(pokemon.side.sideConditions["tailwind"]);
      if (pokemon.side.sideConditions["tailwind"]) {
        return priority + 1;
      }
    },
    onEffectiveness(typeMod, target, type) {
      if (type === "Rock")
        return 1;
    },
    critRatio: 2,
    secondary: null,
    target: "allAdjacentFoes",
    type: "Flying",
    contestType: "Cool"
  },
  rest: {
    inherit: true,
    pp: 10
  },
  rockslide: {
    inherit: true,
    accuracy: 100,
    flags: { protect: 1, mirror: 1, metronome: 1, throw: 1 },
    secondary: {
      chance: 20,
      volatileStatus: "flinch"
    }
  },
  rockthrow: {
    inherit: true,
    accuracy: 100,
    basePower: 90,
    pp: 10,
    flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1, throw: 1 }
  },
  rollingkick: {
    inherit: true,
    accuracy: 100,
    basePower: 40,
    pp: 15,
    priority: 1,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, kick: 1 },
    secondary: null
  },
  scratch: {
    inherit: true,
    pp: 20
  },
  seismictoss: {
    inherit: true,
    pp: 10,
    onHit(target) {
      this.battle.runEvent("EntryHazard", target);
    }
  },
  selfdestruct: {
    inherit: true,
    basePowerCallback(pokemon, target, move) {
      const damagedByTarget = pokemon.attackedBy.some(
        (p) => p.source === target && p.damage > 0 && p.thisTurn
      );
      if (damagedByTarget) {
        this.debug("BP doubled for getting hit by " + target);
        return move.basePower * 2;
      }
      return move.basePower;
    }
  },
  sharpen: { /* Will be implemented soon */
    num: 159,
    accuracy: true,
    basePower: 0,
    category: "Status",
    isNonstandard: "Past",
    name: "Sharpen",
    pp: 20,
    priority: 0,
    flags: { snatch: 1, metronome: 1 },
    boosts: {
      atk: 1
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { boost: { atk: 1 } },
    contestType: "Cute"
  },
  sing: {
    inherit: true,
    accuracy: 60
  },
  skullbash: {
    inherit: true,
    basePower: 120,
    category: "Physical",
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      this.boost({ atk: 1 }, attacker, attacker, move);
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    }
  },
  skyattack: {
    inherit: true,
    flags: { contact: 1, charge: 1, protect: 1, mirror: 1, distance: 1, metronome: 1, nosleeptalk: 1, failinstruct: 1 },
    critRatio: 1,
    onTryMove(attacker, defender, move) {
      if (attacker.removeVolatile(move.id)) {
        return;
      }
      this.add("-prepare", attacker, move.name);
      this.boost({ atk: 1 }, attacker, attacker, move);
      if (!this.runEvent("ChargeMove", attacker, defender, move)) {
        return;
      }
      attacker.addVolatile("twoturnmove", defender);
      return null;
    },
    secondary: null
  },
  slam: {
    inherit: true,
    accuracy: 100,
    basePower: 95,
    pp: 10,
    flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1 }
  },
  slash: {
    inherit: true,
    basePower: 60,
    pp: 10,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
    willCrit: true,
    secondary: {
      chance: 20,
      status: "bld"
    }
  },
  sludge: {
    inherit: true,
    basePower: 70,
    onEffectiveness(typeMod, target, type) {
      if (type === "Water")
        return 1;
    },
    secondary: {
      chance: 30,
      status: "psn"
    }
  },
  smog: {
    inherit: true,
    basePower: 50,
    secondary: {
      chance: 50,
      status: "psn"
    }
  },
  smokescreen: {
    num: 108,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Smokescreen",
    pp: 20,
    priority: 0,
    flags: { snatch: 1, metronome: 1 },
    sideCondition: "tailwind",
    condition: {
      duration: 5,
      durationCallback(target, source, effect) {
        if (source?.hasAbility("persistent")) {
          this.add("-activate", source, "ability: Persistent", "[move] Smokescreen");
          return 7;
        }
        return 5;
      },
      onSideStart(side, source) {
        if (source?.hasAbility("persistent")) {
          this.add("-sidestart", side, "move: Smokescreen", "[persistent]");
        } else {
          this.add("-sidestart", side, "move: Smokescreen");
        }
      },
      onModifyEva(spe, pokemon) {
        return this.chainModify(1.25);
      },
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 5,
      onSideEnd(side) {
        this.add("-sideend", side, "move: Smokescreen");
      }
    },
    secondary: null,
    target: "allySide",
    type: "Normal",
    zMove: { boost: { evasion: 1 } },
    contestType: "Clever"
  },
  softboiled: {
    inherit: true,
    target: "adjacentAllyOrSelf"
  },
  solarbeam: {
    inherit: true,
    flags: { charge: 1, protect: 1, mirror: 1, metronome: 1, pulse: 1, weather: 1, nosleeptalk: 1, failinstruct: 1 }
  },
  sonicboom: {
    num: 49,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    isNonstandard: "Past",
    name: "Sonic Boom",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, sound: 1 },
    secondary: null,
    onEffectiveness(typeMod, target, type) {
      if (type === "Steel")
        return 1;
    },
    target: "normal",
    type: "Normal",
    contestType: "Cool"
  },
  spikecannon: {
    inherit: true,
    basePower: 25,
    flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1, bullet: 1 },
    type: "Water"
  },
  splash: {
    num: 150,
    accuracy: 100,
    basePower: 0,
    basePowerCallback(pokemon, target) {
      const targetWeight = target.getWeight();
      const pokemonWeight = pokemon.getWeight();
      let bp;
      if (pokemonWeight >= targetWeight * 5) {
        bp = 120;
      } else if (pokemonWeight >= targetWeight * 4) {
        bp = 100;
      } else if (pokemonWeight >= targetWeight * 3) {
        bp = 80;
      } else if (pokemonWeight >= targetWeight * 2) {
        bp = 60;
      } else {
        bp = 40;
      }
      this.debug("BP: " + bp);
      return bp;
    },
    category: "Physical",
    name: "Splash",
    pp: 10,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1 },
    onTryHit(target, pokemon, move) {
      if (target.volatiles["dynamax"]) {
        this.add("-fail", pokemon, "Dynamax");
        this.attrLastMove("[still]");
        return null;
      }
    },
    secondary: null,
    target: "normal",
    type: "Water",
    zMove: { basePower: 160 },
    maxMove: { basePower: 130 },
    contestType: "Cute"
  },
  stomp: {
    inherit: true,
    flags: { contact: 1, protect: 1, mirror: 1, nonsky: 1, metronome: 1, kick: 1 },
    onHit() {
      this.field.clearTerrain();
    },
    onAfterSubDamage() {
      this.field.clearTerrain();
    }
  },
  strength: {
    inherit: true,
    basePower: 110,
    pp: 5,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, field: 1 },
    self: {
      boosts: {
        def: -1,
        spd: -1
      }
    },
    type: "Rock"
  },
  stringshot: {
    inherit: true,
    accuracy: 100,
    pp: 20
  },
  stunspore: {
    inherit: true,
    accuracy: 100,
    pp: 20
  },
  submission: {
    inherit: true,
    accuracy: 100,
    basePower: 120,
    pp: 10,
    recoil: [1, 3]
  },
  supersonic: {
    inherit: true,
    accuracy: 85,
    pp: 5
  },
  surf: {
    inherit: true,
    flags: { protect: 1, mirror: 1, nonsky: 1, metronome: 1, field: 1 }
  },
  swift: {
    inherit: true,
    accuracy: 100,
    basePower: 65,
    pp: 5,
    priority: 2
  },
  tackle: {
    inherit: true,
    pp: 20
  },
  takedown: {
    inherit: true,
    accuracy: 100,
    basePower: 85,
    pp: 20,
    recoil: [0, 0],
    secondary: {
      chance: 20,
      boosts: {
        spe: -1
      }
    },
    type: "Fighting"
  },
  thrash: {
    inherit: true,
    basePower: 130,
    pp: 5
  },
  thunder: {
    inherit: true,
    accuracy: 85,
    pp: 5,
    flags: { protect: 1, mirror: 1, metronome: 1, weather: 1 }
  },
  thunderpunch: {
    inherit: true,
    basePower: 85
  },
  thundershock: {
    inherit: true,
    basePower: 80,
    pp: 15,
    secondary: {
      chance: 30,
      status: "par"
    }
  },
  triattack: {
    inherit: true,
    basePower: 90,
    pp: 15,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    secondary: {
      chance: 30,
      onHit(target, source) {
        const result = this.random(3);
        if (result === 0) {
          target.trySetStatus("brn", source);
        } else if (result === 1) {
          target.trySetStatus("par", source);
        } else {
          target.trySetStatus("frz", source);
        }
      }
    }
  },
  twineedle: {
    inherit: true,
    basePower: 45,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    multihit: 2,
    secondary: {
      chance: 50,
      status: "psn"
    }
  },
  vinewhip: {
    inherit: true,
    basePower: 80,
    pp: 15,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    secondary: {
      chance: 30,
      volatileStatus: "flinch"
    }
  },
  visegrip: {
    inherit: true,
    accuracy: 85,
    basePower: 120,
    pp: 5,
    critRatio: 3,
    type: "Bug",
  },
  waterfall: {
    inherit: true,
    basePower: 85
  },
  watergun: {
    inherit: true,
    pp: 15,
    priority: 1,
    flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1, pulse: 1 }
  },
  wingattack: {
    inherit: true,
    basePower: 90,
    pp: 20,
    flags: { contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1, wind: 1 }
  },
  withdraw: {
    inherit: true,
    pp: 20,
    priority: 1
  },
  whirlwind: {
    num: 18,
    accuracy: 100,
    basePower: 60,
    category: "Special",
    name: "Whirlwind",
    pp: 10,
    priority: -6,
    flags: { protect: 1, mirror: 1, metronome: 1, noassist: 1, failcopycat: 1, wind: 1 },
    forceSwitch: true,
    secondary: null,
    target: "any",
    type: "Flying",
    zMove: { boost: { spd: 1 } },
    contestType: "Clever"
  },
  wrap: {
    inherit: true,
    accuracy: 100,
    basePower: 50,
    pp: 10
  },
};