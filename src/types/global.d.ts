/// <reference types="types-for-adobe/Illustrator/2015.3"/>

export type ImageFormat = "auto" | "png" | "png24" | "jpg" | "svg";

export interface FontSetting {
  aifont: string;
  family: string;
  weight: string;
  style: string;
}

export interface SettingsBlock {
  nameSpace: string;
  settings_version: string;
  create_promo_image: boolean;
  promo_image_width: number;
  image_format: ImageFormat[];
  write_image_files: boolean;
  responsiveness: "fixed" | "dynamic";
  max_width: "";
  output: "one-file" | "multiple-files";
  project_name: string;
  project_type: string;
  html_output_path: string;
  html_output_extension: string;
  image_output_path: string;
  image_source_path: string;
  image_alt_text: string;
  cache_bust_token: string;
  create_config_file: boolean;
  config_file_path: string;
  local_preview_template: string;
  png_transparent: boolean;
  png_number_of_colors: number;
  jpg_quality: number;
  center_html_output: boolean;
  use_2x_images_if_possible: boolean;
  use_lazy_loader: boolean;
  include_resizer_classes: boolean;
  include_resizer_widths: boolean;
  include_resizer_script: boolean;
  inline_svg: boolean;
  svg_id_prefix: string;
  svg_embed_images: boolean;
  render_text_as: "html" | "image";
  render_rotated_skewed_text_as: "html" | "image";
  testing_mode: boolean;
  show_completion_dialog_box: true;
  clickable_link: string;
  last_updated_text: string;
  headline: string;
  leadin: string;
  summary: string;
  notes: string;
  sources: string;
  credit: string;
  settings_block: string[];
  config_file: string[];
  fonts: FontSetting[];
}

export type PartialSettingsBlock = Partial<SettingsBlock>;

// Adds standard types to String that are missing in the adobe types
export interface ExtendedString extends String {
  replace: (
    what: string | RegExp,
    with_: string | ((match: string, name?: string) => string)
  ) => string;
  split: (delimiter: string | RegExp, limit?: number) => string[];
}

export class ExtendedMatrix extends Matrix {
  public mValueTX: number;
  public mValueTY: number;
}

export class ExtendedPageItem extends PageItem {
  /**
   * The class name of the object.
   */
  readonly typename: "PageItem";
}

export class ExtendedLayer extends Layer {
  /**
   * The class name of the object.
   */
  readonly typename: "Layer";
}

export class ExtendedGroupItem extends GroupItem {
  /**
   * The class name of the object.
   */
  readonly typename: "GroupItem";
}

export type LockableObject =
  | PathItem
  | ExtendedPageItem
  | ExtendedLayer
  | ExtendedGroupItem;
