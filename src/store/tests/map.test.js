import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, test } from "vitest";
import { useMapStore } from "../map";

describe("map", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should", () => {
    const { map, setMap } = useMapStore();

    const newMap = [1, 1, 1]

    setMap(newMap)

    expect(map).toEqual(newMap);
  });
});
