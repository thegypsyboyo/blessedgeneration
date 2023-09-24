import { draftMode } from 'next/headers';

export function isDraftModeEnabled() {
  return draftMode().isEnabled;
}