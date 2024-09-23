import { useEffect, useState } from "react";
import useFadeAnimation from "./useFadeAnimation";

const useUpdateContent = (initialItem) => {
  const [currentItem, setCurrentItem] = useState(initialItem);
  const [activeTab, setActiveTab] = useState(initialItem?.name || "");
  const { setFade, fade, changeFade } = useFadeAnimation();

  useEffect(() => {
    if (initialItem) {
      setFade(true);
    }
  }, [initialItem, setFade]);

  const updateContent = (item, name) => {
    if (activeTab === name) return;
    setCurrentItem(item);
    setActiveTab(name);
    changeFade();
  };
  return { currentItem, activeTab, fade, updateContent };
};

export default useUpdateContent;
