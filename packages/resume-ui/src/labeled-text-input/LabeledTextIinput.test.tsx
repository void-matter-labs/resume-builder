import { composeStory } from "@storybook/react";
import { describe, it } from "vitest";
import meta, { Example } from "./LabeledTextInput.stories";

describe("LabeledTextInput", () => {
  it("when used inside a form submits data", composeStory(Example, meta).run)
});
