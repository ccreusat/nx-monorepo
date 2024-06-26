/**
 * Tabs Component
 */
import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { TabsItem, TabsItemProps } from './tabs-item';
import { TabsList } from './tabs-list';
import { TabsPanel } from './tabs-panel';
import { TabsContext } from './tabs.context';

export interface TabsProps {
  /**
   * Selected tab, by default.
   */
  defaultId?: string;
  /**
   * Items to be displayed
   */
  items: TabsItemProps[];
  /**
   * Get notified when a tab is selected
   */
  onChange?: (tab: TabsItemProps) => void;
  /**
   * Children Props
   */
  children?: (...props: any) => ReactNode;
}

/**
 * Tab Content displayed one at a time when a Tab Item is selected
 */
const Root = ({ defaultId, items, onChange, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultId || '');
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const setSelectedTab = useCallback((id: string) => {
    setActiveTab(id);
  }, []);

  useEffect(() => {
    const currentItem = items.find((item) => item.id === activeTab);
    currentItem && onChange?.(currentItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]); // only updating the activeTab value should trigger this effect.

  useEffect(() => {
    function setTabPosition() {
      const currentTabIndex = items.findIndex((item) => item.id === activeTab);
      if (currentTabIndex === -1 && defaultId) {
        setActiveTab(defaultId);
      }
      const currentTabRef = tabsRef.current[currentTabIndex];
      if (currentTabRef) {
        currentTabRef.focus();
        setTabUnderlineLeft(currentTabRef?.offsetLeft ?? 0);
        setTabUnderlineWidth(currentTabRef?.clientWidth ?? 0);
      }
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTab, items, defaultId]);

  const moveFocusToPreviousTab = useCallback(
    (activeTab: string) => {
      const index = items.findIndex((item) => item.id === activeTab);

      if (activeTab === items[0]?.id) {
        setActiveTab(items[items.length - 1]?.id);
      } else {
        setActiveTab(items[index - 1]?.id);
      }
    },
    [items]
  );

  const moveFocusToNextTab = useCallback(
    (activeTab: string | number) => {
      const index = items.findIndex((item) => item.id === activeTab);

      if (activeTab === items[items.length - 1]?.id) {
        setActiveTab(items[0]?.id);
      } else {
        setActiveTab(items[index + 1]?.id);
      }
    },
    [items]
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (event.code) {
        case 'ArrowLeft':
          moveFocusToPreviousTab(activeTab);
          break;

        case 'ArrowRight':
          moveFocusToNextTab(activeTab);
          break;

        case 'Home':
          setActiveTab(items[0]?.id);
          break;

        case 'End':
          setActiveTab(items[items.length - 1]?.id);
          break;

        default:
          break;
      }
    },
    [activeTab, items, moveFocusToNextTab, moveFocusToPreviousTab]
  );

  const value = useMemo(
    () => ({
      activeTab,
      items,
      setSelectedTab,
      tabsRef,
      tabUnderlineLeft,
      tabUnderlineWidth,
      onKeyDown,
    }),
    [
      activeTab,
      items,
      onKeyDown,
      setSelectedTab,
      tabUnderlineLeft,
      tabUnderlineWidth,
    ]
  );

  const currentItem = items.find((item) => item.id === activeTab);

  return (
    <TabsContext.Provider value={value}>
      {typeof children === 'function' ? (
        children(currentItem)
      ) : (
        <>
          <Tabs.List />
          <Tabs.Panel currentItem={currentItem}>
            {currentItem?.content}
          </Tabs.Panel>
        </>
      )}
    </TabsContext.Provider>
  );
};

export const Tabs = Object.assign(Root, {
  Item: TabsItem,
  Panel: TabsPanel,
  List: TabsList,
});

Root.displayName = 'Tabs';
