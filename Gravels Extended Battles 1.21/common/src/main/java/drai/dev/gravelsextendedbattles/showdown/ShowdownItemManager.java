package drai.dev.gravelsextendedbattles.showdown;

import com.cobblemon.mod.common.api.*;
import com.cobblemon.mod.common.api.reactive.*;
import kotlin.*;

import java.nio.file.*;
import java.util.*;

public class ShowdownItemManager {

    public static CancelableObservable<ShowdownItemModificationEvent> MODIFY_ITEMS_EVENT = new CancelableObservable<>();

    public static void injectItems(String showdownFolder) {
        MODIFY_ITEMS_EVENT.postThen(
                new ShowdownItemModificationEvent(new ArrayList<>()),
                showdownItemModificationEvent -> Unit.INSTANCE,
                showdownItemModificationEvent -> {
                    injectItems(showdownFolder, showdownItemModificationEvent.itemModificationEntries);
                    return Unit.INSTANCE;
                });
    }

    private static void injectItems(String showdownFolder, List<ItemModificationEntry> itemModificationEntries) {
        try {
            var filePath = Path.of(showdownFolder+"items.js");
            String content = Files.readString(filePath);
            java.util.regex.Pattern numPattern = java.util.regex.Pattern.compile("num:\\s*(\\d+)", java.util.regex.Pattern.MULTILINE);
            java.util.regex.Matcher matcher = numPattern.matcher(content);

            int maxNum = 0;
            while (matcher.find()) {
                maxNum = Integer.parseInt(matcher.group(1));
            }
            StringBuilder builder = new StringBuilder();

            for (int i = 0; i < itemModificationEntries.size(); i++) {

                var modificationEntry = itemModificationEntries.get(i);
                if(content.contains(modificationEntry.getShowdownItemId()) || builder.toString().contains(modificationEntry.getShowdownItemId())) continue;
                int nextNum = maxNum + i + 1;
                builder.append(modificationEntry.getEntry(nextNum));
            }

            int insertPos = content.lastIndexOf("};");
            if (insertPos == -1) {
                throw new RuntimeException("Can't find closing }; for Items object");
            }
            String newContent = content.substring(0, insertPos) + builder + "\n};";
            Files.writeString(filePath, newContent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
