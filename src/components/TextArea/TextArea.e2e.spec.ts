import path from "path";

import { test } from "@playwright/test";

import { compareScreenshots } from "utils/testHelpers";

test.describe("TextArea", () => {
  test("compare empty fields", async ({ page }, testInfo) => {
    const snapshotDir = "empty-fields";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const textAreaButton = page.locator("#ui-textarea");

    await textAreaButton.click();

    const defaultButton = page.locator("#ui-textarea--default");

    await defaultButton.click();

    const valueControl = page.locator("#control-value");

    await valueControl.fill("");

    const textArea = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=TextArea");

    await page.waitForTimeout(500);

    await textArea.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 11);
  });

  test("compare filled fields", async ({ page }, testInfo) => {
    const snapshotDir = "filled-fields";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const textAreaButton = page.locator("#ui-textarea");

    await textAreaButton.click();

    const defaultButton = page.locator("#ui-textarea--default");

    await defaultButton.click();

    const valueControl = page.locator("#control-value");

    await valueControl.fill("Marklar foobar lorem ipsum");

    const textField = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=TextArea");

    await page.waitForTimeout(500);

    await textField.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 12);
  });

  test("compare error fields", async ({ page }, testInfo) => {
    const snapshotDir = "error-fields";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    const textAreaButton = page.locator("#ui-textarea");

    await textAreaButton.click();

    const defaultButton = page.locator("#ui-textarea--default");

    await defaultButton.click();

    await page.locator("#set-error").click();

    const errorControl = await page.locator("#control-error");

    await errorControl.fill("foobar");

    const textField = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=TextArea");

    await page.waitForTimeout(500);

    await textField.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 15);
  });
});
