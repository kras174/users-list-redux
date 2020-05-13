export const MENU_SWITCH_HANDLER = "MENU_SWITCH_HANDLER";

export function menuSwitchHandler() {
  return (dispatch, getState) => {
    console.log("!!!!");
    const switcher = getState().content.previewContent;
    dispatch({
      type: MENU_SWITCH_HANDLER,
      payload: !switcher,
    });
  };
}
