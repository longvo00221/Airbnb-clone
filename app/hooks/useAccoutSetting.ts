import { create } from "zustand";

interface AccountSettingModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}
const useAccountSetting = create<AccountSettingModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))
export default useAccountSetting