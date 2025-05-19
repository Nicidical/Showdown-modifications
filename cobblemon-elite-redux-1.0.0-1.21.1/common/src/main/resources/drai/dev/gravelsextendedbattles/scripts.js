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
var scripts_exports = {};
__export(scripts_exports, {
  Scripts: () => Scripts
});
module.exports = __toCommonJS(scripts_exports);
const Scripts = {
  inherit: "base",
  getEffectiveness(move, target) {
    // Initialize effectiveness at 1x (neutral)
    let effectiveness = 1;
    const targetTypes = target.types;

    for (const type of targetTypes) {
        let typeMod = this.dex.getEffectiveness(move.type, type);

        // Custom rule for Shadow type moves
        if (move.type === "Shadow") {
            if (type === "Questionmark" || type === "Crystal") {
                typeMod = 0; // Neutral damage to Questionmark and Crystal
            } else if (type === "Light" || type === "Eldritch") {
                typeMod = 2; // Reduced damage to Light and Eldritch
            } else {
                typeMod = 1; // Always apply a single 2x multiplier, regardless of dual types
            }
        }

        // Apply type modification for each target type
        effectiveness *= Math.pow(2, typeMod);
    }

    // Return effectiveness clamped to either 0.5 (resisted), 1 (neutral), or 2 (super-effective)
    return Math.min(effectiveness, 2);
  }
};
//# sourceMappingURL=scripts.js.map
