package drai.dev.gravelsextendedbattles.showdown;

import com.cobblemon.mod.common.api.events.*;

import java.util.*;

public class ShowdownItemModificationEvent extends Cancelable {
    public List<ItemModificationEntry> itemModificationEntries;

    public ShowdownItemModificationEvent(List<ItemModificationEntry> itemModificationEntries) {
        this.itemModificationEntries = itemModificationEntries;
    }
}
