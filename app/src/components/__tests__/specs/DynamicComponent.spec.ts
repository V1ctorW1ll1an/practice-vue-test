import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import DynamicComponent from "@/components/DynamicComponent.vue";

describe("DynamicComponent", () => {
    it("Should render element correctly", async () => {
        const [componentId, componentElement, componentSlot] = [
            "dynamicComponent",
            "div",
            "Hello World from element",
        ];
        render(DynamicComponent, {
            props: {
                id: componentId,
                element: componentElement,
            },
            slots: {
                default: componentSlot,
            },
        });

        const view = await screen.findByText(componentSlot);

        // test id element property
        expect(view.id).toBe(componentId);
        expect(view.tagName.toLowerCase()).toBe(componentElement);
        expect(view.textContent).toBe(componentSlot);
    });
});
