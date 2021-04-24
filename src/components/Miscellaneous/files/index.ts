import StyledComponents from "./StyledComponents.md";
import TargetBlank from "./TargetBlank.md";

export interface FileElement {
  title: string;
  subtitle: string;
  path: string;
}

const styledComponentsElement: FileElement = {
  title: "Styled Components",
  subtitle: "Hvordan bruke props i Styled Components",
  path: StyledComponents,
};

const targetBlankElement: FileElement = {
  title: "Target _blank",
  subtitle: "Sikkerhetshull i linker",
  path: TargetBlank,
};

const allFiles: FileElement[] = [styledComponentsElement, targetBlankElement];

export default allFiles;
