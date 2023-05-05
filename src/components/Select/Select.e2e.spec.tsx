import path from "path";

import { test } from "@playwright/test";

import { compareScreenshots } from "utils/testHelpers";

test.describe("Select", () => {
  test("compare default", async ({ page }, testInfo) => {
    const snapshotDir = "default";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const selectButton = page.locator("#ui-select");

    await selectButton.click();

    const defaultSelectButton = page.locator("#ui-select--default");

    await defaultSelectButton.click();

    const select = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Select");

    await page.waitForTimeout(500);

    await select.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 9);
  });
});
