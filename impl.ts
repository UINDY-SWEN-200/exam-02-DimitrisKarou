export interface TrainingEvent {
  name: string
  description: string
  start: Date
  end: Date
}

let events: TrainingEvent[] = []

export function addEvent(event: TrainingEvent) {
  events.push(event)
}

export function deleteEvent(event: TrainingEvent) {
  events = events.filter((e) => e !== event)
}

export function find(text: string): TrainingEvent | undefined {
  return events.find((event) => event.name.includes(text))
}
