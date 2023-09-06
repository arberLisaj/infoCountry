export interface ActionType {
  type: "ChangeTheme";
  value: boolean;
}

const themeReducer = (state: boolean, action: ActionType) => {
  if ((action.type = "ChangeTheme")) state = action.value;
  return state;
};
export default themeReducer;
