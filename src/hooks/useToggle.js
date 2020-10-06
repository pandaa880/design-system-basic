/**
 * Reusable Toggle Component
 * @author Prashant Chuaudhari
 */

import { useState } from "react";

export function useToggle() {
  const [on, toggle] = useState(false);

  const handleToggle = () => toggle(!on);

  return {
    on,
    toggle: handleToggle,
  };

  /**
   * Render props pattern
   * render children as a function so we can access parameters in the wrapped component
   */
  // return children({
  //   on,
  //   toggle: handleToggle
  // })
}
