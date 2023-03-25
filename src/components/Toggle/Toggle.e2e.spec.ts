import path from "path";

import { test } from "@playwright/test";

import { compareScreenshots } from "utils/testHelpers";

test.describe("Toggle", () => {
  test("compare with no label", async ({ page }, testInfo) => {
    const snapshotDir = "empty-label";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const toggleButton = page.locator("#ui-toggle");

    await toggleButton.click();

    const controlledButton = page.locator("#ui-toggle--controlled");

    await controlledButton.click();

    const toggle = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Toggle");

    await page.waitForTimeout(500);

    await toggle.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 1);
  });

  test("compare checked with no label", async ({ page }, testInfo) => {
    const snapshotDir = "empty-label-checked";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const toggleButton = page.locator("#ui-toggle");

    await toggleButton.click();

    const controlledButton = page.locator("#ui-toggle--controlled");

    await controlledButton.click();

    const toggle = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Toggle");

    await toggle.click();

    await page.waitForTimeout(500);

    await toggle.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 1);
  });

  test("compare with label", async ({ page }, testInfo) => {
    const snapshotDir = "filled-label";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const toggleButton = page.locator("#ui-toggle");

    await toggleButton.click();

    const controlledButton = page.locator("#ui-toggle--controlled");

    await controlledButton.click();

    const toggle = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Toggle");

    await page.waitForTimeout(500);

    await toggle.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 1);
  });
});
