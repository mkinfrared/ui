import path from "path";

import { test } from "@playwright/test";

import { delay } from "utils";
import { compareScreenshots } from "utils/testHelpers";

test.describe("Checkbox", () => {
  test("compare with no label", async ({ page }, testInfo) => {
    const snapshotDir = "empty-label";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const checkboxButton = page.locator("#ui-checkbox");

    await checkboxButton.click();

    const controlledButton = page.locator("#ui-checkbox--controlled");

    await controlledButton.click();

    const checkbox = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Checkbox");

    await checkbox.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots(testInfo.snapshotDir, snapshotDir);
  });

  test("compare checked with no label", async ({ page }, testInfo) => {
    const snapshotDir = "empty-label-checked";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const checkboxButton = page.locator("#ui-checkbox");

    await checkboxButton.click();

    const controlledButton = page.locator("#ui-checkbox--controlled");

    await controlledButton.click();

    const checkbox = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Checkbox");

    await checkbox.click();

    await delay(500);

    await checkbox.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots(testInfo.snapshotDir, snapshotDir);
  });

  test("compare with label", async ({ page }, testInfo) => {
    const snapshotDir = "filled-label";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const checkboxButton = page.locator("#ui-checkbox");

    await checkboxButton.click();

    const uncontrolledButton = page.locator("#ui-checkbox--uncontrolled");

    await uncontrolledButton.click();

    const checkbox = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=Checkbox");

    await checkbox.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots(testInfo.snapshotDir, snapshotDir);
  });
});
