import path from "path";

import { test } from "@playwright/test";

import { compareScreenshots } from "utils/testHelpers";

test.describe("Chip", () => {
  test("compare default", async ({ page }, testInfo) => {
    const snapshotDir = "default";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const storyButton = page.locator("#ui-chip");

    await storyButton.click();

    const defaultButton = page.locator("#ui-chip--default");

    await defaultButton.click();

    const chip = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Chip")
      .first();

    await page.waitForTimeout(500);

    await chip.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 1);
  });

  test("compare delete", async ({ page }, testInfo) => {
    const snapshotDir = "with delete";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const storyButton = page.locator("#ui-chip");

    await storyButton.click();

    const defaultButton = page.locator("#ui-chip--with-delete");

    await defaultButton.click();

    const chip = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Chip")
      .first();

    await page.waitForTimeout(500);

    await chip.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 2);
  });
});
