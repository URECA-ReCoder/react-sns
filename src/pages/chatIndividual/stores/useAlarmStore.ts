import { create } from 'zustand';

interface AlarmStore {
  alarmOff: boolean;
  setAlarmOff: (alarmOff: boolean) => void;
}

export const useAlarmStore = create<AlarmStore>((set) => ({
  alarmOff: false,
  setAlarmOff: (alarmOff) => set({ alarmOff }),
}));
