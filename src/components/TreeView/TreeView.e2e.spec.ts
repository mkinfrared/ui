import path from "path";

import { test } from "@playwright/test";

import { compareScreenshots } from "utils/testHelpers";

test.describe("TreeView", () => {
  test("compare collapsed", async ({ page }, testInfo) => {
    const snapshotDir = "collapsed";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    await page.getByRole("button", { name: "TreeView" }).click();

    await page.getByRole("link", { name: "Uncontrolled" }).click();

    const tree = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=UncontrolledTreeView")
      .first();

    await page.waitForTimeout(500);

    await tree.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 1);
  });

  test("compare expanded", async ({ page }, testInfo) => {
    const snapshotDir = "expanded";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    await page.getByRole("button", { name: "TreeView" }).click();

    await page.getByRole("link", { name: "Uncontrolled" }).click();

    const tree = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=UncontrolledTreeView");

    await tree.getByRole("button", { name: "Root 1" }).click();

    await tree.getByRole("button", { name: "Root 2" }).click();

    await tree
      .getByRole("treeitem", { name: "Root 2" })
      .getByRole("button", { name: "Child 1" })
      .click();

    await page.waitForTimeout(500);

    await tree.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 1);
  });

  test("compare selected node", async ({ page }, testInfo) => {
    const snapshotDir = "selected-node";

    const snapshotPath = path.resolve(
      testInfo.snapshotDir,
      snapshotDir,
      `${testInfo.project.name}.png`,
    );

    await page.goto("/");

    await page.getByRole("button", { name: "TreeView" }).click();

    await page.getByRole("link", { name: "Uncontrolled" }).click();

    const tree = page
      .frameLocator("#storybook-preview-iframe")
      .locator("data-testid=UncontrolledTreeView");

    await tree.getByRole("button", { name: "Root 1" }).click();

    const rootNode2 = await tree.getByRole("button", { name: "Root 1" });

    await tree.getByRole("button", { name: "Child 1" }).click();

    const treeNode = await tree.getByRole("button", { name: "Grand Child 1" });

    await treeNode.click();

    await rootNode2.hover();

    await page.waitForTimeout(500);

    await treeNode.screenshot({
      path: snapshotPath,
    });

    await compareScreenshots([testInfo.snapshotDir, snapshotDir], 1);
  });
});
