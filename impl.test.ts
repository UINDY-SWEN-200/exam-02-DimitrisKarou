import { TrainingEvent, addEvent, deleteEvent, find } from "./impl"

const mockEvents: TrainingEvent[] = [
  { name: "an Event", description: "b", start: new Date(), end: new Date() },
]

describe("mock TrainingEvents", () => {
  it("should be defined", () => {
    expect(mockEvents).toBeDefined()
  })

  it("should be able to add new events", () => {
    for (const m of mockEvents) {
      addEvent(m)
    }
    const e: TrainingEvent | undefined = find("an Event")
    if (e) {
      expect(e.name).toBe("an Event")
      expect(e.description).toBe("b")
    } else {
      fail("Event not found")
    }
  })

  it("should be able to find by description", () => {
    for (const m of mockEvents) {
      addEvent(m)
    }
    const e: TrainingEvent | undefined = find("b")
    if (e) {
      expect(e.name).toBe("an Event")
      expect(e.description).toBe("b")
    } else {
      fail("Event not found")
    }
  })
})
