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

// Copy of Document class from types-for-adobe/Illustrator/2015.3
// renamed to AiDocument to avoid conflict with Document class
export class AiDocument {
  /**
   * The XMP packet string associated with the document.
   */
  XMPString: string;

  /**
   * The active data set.
   */
  activeDataSet: DataSet;

  /**
   * The active layer.
   */
  activeLayer: Layer;

  /**
   * The document's current view.
   */
  readonly activeView: View;

  /**
   * All artboards in the document.
   */
  readonly artboards: Artboards;

  /**
   * The brushes defined in this document.
   */
  readonly brushes: Brushes;

  /**
   * The list of character styles in this document.
   */
  readonly characterStyles: CharacterStyles;

  /**
   * The name of the color profile of the document.
   */
  readonly colorProfileName: string;

  /**
   * The compound path artwork in this collection.
   */
  readonly compoundPathItems: CompoundPathItems;

  /**
   *
   */
  cropBox: Rect;

  /**
   *
   */
  cropStyle: CropOptions;

  /**
   * The data sets defined in this document.
   */
  readonly dataSets: DataSets;

  /**
   * Default fill color.
   */
  defaultFillColor: Color;

  /**
   * Will art beneath a filled object be overprinted by default?
   */
  defaultFillOverprint: boolean;

  /**
   * Should a new path be filled?
   */
  defaultFilled: boolean;

  /**
   * Default type of line capping.
   */
  defaultStrokeCap: StrokeCap;

  /**
   * Default stroke color.
   */
  defaultStrokeColor: Color;

  /**
   * The default distance into the dash pattern at which the pattern should be started.
   */
  defaultStrokeDashOffset: number;

  /**
   * Default dash lengths (set to {} for a solid line)
   */
  defaultStrokeDashes: number[];

  /**
   * Default type of joints.
   */
  defaultStrokeJoin: StrokeJoin;

  /**
   * Specifies whether a join is mitered (pointed) or beveled (squared-off) by default.
   */
  defaultStrokeMiterLimit: number;

  /**
   * Will art beneath a stroked object be overprinted by default?
   */
  defaultStrokeOverprint: boolean;

  /**
   * Default width of stroke.
   */
  defaultStrokeWidth: number;

  /**
   * Should a new path be stroked?
   */
  defaultStroked: boolean;

  /**
   * The color space used for the document.
   */
  readonly documentColorSpace: DocumentColorSpace;

  /**
   * The embedded art items in this layer.
   */
  readonly embeddedItems: EmbeddedItems;

  /**
   * The file associated with the document.
   */
  readonly fullName: File;

  /**
   * The bounds of the illustration excluding stroke width.
   */
  readonly geometricBounds: Rect;

  /**
   * The gradients available in this document.
   */
  readonly gradients: Gradients;

  /**
   * The graph art items in this document.
   */
  readonly graphItems: GraphItems;

  /**
   * The graphic styles defined in this document.
   */
  readonly graphicStyles: ArtStyles;

  /**
   * The group items in this document.
   */
  readonly groupItems: GroupItems;

  /**
   *
   */
  readonly height: number;

  /**
   * The list of inks in this document.
   */
  readonly inkList: Ink[];

  /**
   * The Kinsoku set.
   */
  readonly kinsokuSet: string[];

  /**
   * The layers in this document.
   */
  readonly layers: Layers;

  /**
   * The text frame items in this story.
   */
  readonly legacyTextItems: LegacyTextItems;

  /**
   * The mesh art items in this document.
   */
  readonly meshItems: MeshItems;

  /**
   * The Mojikumi set.
   */
  readonly mojikumiSet: string[];

  /**
   * The document's name.
   */
  readonly name: string;

  /**
   * The non-native art items in this document.
   */
  readonly nonNativeItems: NonNativeItems;

  /**
   *
   */
  readonly outputResolution: number;

  /**
   * All the artwork in this document.
   */
  readonly pageItems: PageItems;

  /**
   *
   */
  pageOrigin: Point | [number, number];

  /**
   * The list of paragraph styles in this document.
   */
  readonly paragraphStyles: ParagraphStyles;

  /**
   * The object's container.
   */
  readonly parent: object;

  /**
   * Path specification for the document.
   */
  readonly path: File;

  /**
   * The path artwork in this document.
   */
  readonly pathItems: PathItems;

  /**
   * The patterns available in this document.
   */
  readonly patterns: Patterns;

  /**
   * The placed art items in this document.
   */
  readonly placedItems: PlacedItems;

  /**
   * The plugin art items in this document.
   */
  readonly pluginItems: PluginItems;

  /**
   *
   */
  readonly printTiles: boolean;

  /**
   * The document raster effects settings.
   */
  rasterEffectSettings: RasterEffectOptions;

  /**
   * The raster art items in this document.
   */
  readonly rasterItems: RasterItems;

  /**
   *
   */
  rulerOrigin: Point | [number, number];

  /**
   *
   */
  readonly rulerUnits: RulerUnits;

  /**
   * Has the document been saved?
   */
  saved: boolean;

  /**
   * The selection within the document.
   */
  selection: any;

  /**
   *
   */
  readonly showPlacedImages: boolean;

  /**
   *
   */
  readonly splitLongPaths: boolean;

  /**
   * The custom spot colors available in this document.
   */
  readonly spots: Spots;

  /**
   * Is the file a stationery file?
   */
  readonly stationery: boolean;

  /**
   * The story items in this document.
   */
  readonly stories: Stories;

  /**
   * The Swatch Groups in this document.
   */
  readonly swatchGroups: SwatchGroups;

  /**
   * The swatches in this document.
   */
  readonly swatches: Swatches;

  /**
   * The symbol items in this document.
   */
  readonly symbolItems: SymbolItems;

  /**
   * The symbols defined in this document.
   */
  readonly symbols: Symbols;

  /**
   * The tags in this document.
   */
  readonly tags: Tags;

  /**
   * The text frame items in this document.
   */
  readonly textFrames: TextFrameItems;

  /**
   *
   */
  readonly tileFullPages: boolean;

  /**
   * The class name of the object.
   */
  readonly typename: string;

  /**
   *
   */
  readonly useDefaultScreen: boolean;

  /**
   * The variables defined in this document.
   */
  readonly variables: Variables;

  /**
   * The locked variables.
   */
  variablesLocked: boolean;

  /**
   * The views in this document.
   */
  readonly views: Views;

  /**
   * The visible bounds of the illustration including stroke width.
   */
  readonly visibleBounds: Rect;

  /**
   *
   */
  readonly width: number;

  /**
   * Activate the first window associated with the document.
   */
  activate(): void;

  /**
   * Close the specified document(s)
   * @param saving Specifies whether changes should be saved before closing.
   */
  close(saving?: SaveOptions): void;

  /**
   * Converts the coordinate system of a single point from one coordinate system to another.
   * @param coordinate The Coordinate to convert.
   * @param source The source coordinate system.
   * @param destination The destination coordinate system.
   */
  convertCoordinate(
    coordinate: Point | [number, number],
    source: CoordinateSystem,
    destination: CoordinateSystem
  ): Point | [number, number];

  /**
   * Export the specified document(s)
   * @param exportFile The file to export the document to.
   * @param exportFormat The file type to export the document as.
   * @param options Options for the file type specified.
   */
  exportFile(exportFile: File, exportFormat: ExportType, options?: any): void;

  /**
   * Save all PDF presets to a file.
   * @param file File to export to.
   */
  exportPDFPreset(file: File): void;

  /**
   * Saves all perspective grid presets to a file.
   * @param file File to export to.
   */
  exportPerspectiveGridPreset(file: File): void;

  /**
   * Export the current print setting to the preset file.
   * @param file File to export to.
   */
  exportPrintPreset(file: File): void;

  /**
   * Export the selection as Ai file.
   * @param exportFile The file to export the selection to.
   */
  exportSelectionAsAi(exportFile: File): void;

  /**
   * Export the selection as PNG file.
   * @param exportFile The file to export the selection to.
   * @param options Options for the PNG24 export.
   */
  exportSelectionAsPNG(exportFile: File, options?: any): void;

  /**
   * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.
   * @param file File spec to export to.
   */
  exportVariables(file: File): void;

  /**
   * Change the artboard to selected art bounds.
   * @param index The index of the artboard to update.
   */
  fitArtboardToSelectedArt(index?: number): boolean;

  /**
   * Gets the active plane of the active perspective grid of the document.
   */
  getPerspectiveActivePlane(): PerspectiveGridPlaneType;

  /**
   * Hides the current active perspective grid for the document, if there is visible perspective grid.
   */
  hidePerspectiveGrid(): boolean;

  /**
   * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.
   * @param imageFile The file to which the captured image should be written.
   * @param clipBounds The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.
   * @param options Describes the image capture options.
   */
  imageCapture(
    imageFile: File,
    clipBounds?: Rect,
    options?: ImageCaptureOptions
  ): void;

  /**
   * Load the character styles from the Illustrator file.
   * @param fileSpec File spec to import from.
   */
  importCharacterStyles(fileSpec: File): void;

  /**
   * Import the file into current Ai document.
   * @param importFile The file to import in the current document.
   * @param isLinked Is AssetLiveLinked.
   * @param libraryName For Internal Use.
   * @param itemName For Internal Use.
   * @param elementRef For Internal Use.
   * @param modifiedTime For Internal Use.
   * @param creationTime For Internal Use.
   * @param adobeStockId For Internal Use.
   * @param adobeStockLicense For Internal Use.
   */
  importFile(
    importFile: File,
    isLinked: boolean,
    libraryName?: string,
    itemName?: string,
    elementRef?: string,
    modifiedTime?: number,
    creationTime?: number,
    adobeStockId?: string,
    adobeStockLicense?: string
  ): void;

  /**
   * Load all PDF presets from a file.
   * @param fileSpec File to import from.
   * @param replacingPreset Should existing editable presets be replaced?
   */
  importPDFPreset(fileSpec: File, replacingPreset?: boolean): void;

  /**
   * Load the paragraph styles from the Illustrator file.
   * @param fileSpec File spec to import from.
   */
  importParagraphStyles(fileSpec: File): void;

  /**
   * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.
   * @param fileSpec File to import from.
   * @param perspectivePreset Name of perspective grid preset.
   */
  importPerspectiveGridPreset(fileSpec: File, perspectivePreset?: string): void;

  /**
   * Apply the named print preset from the file to the current print setting.
   * @param printPreset The name of a print preset to import.
   * @param fileSpec File to import from.
   */
  importPrintPreset(printPreset: string, fileSpec: File): void;

  /**
   * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.
   * @param fileSpec File spec to import from.
   */
  importVariables(fileSpec: File): void;

  /**
   * Print the document.
   * @param options Print options.
   */
  print(options?: PrintOptions): void;

  /**
   * Process a gesture based on input points.
   * @param gesturePointsFile File Path containing points constituting the gesture.
   */
  processGesture(gesturePointsFile: string): void;

  /**
   * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.
   * @param sourceArt The page item(s) to be rasterized.
   * @param clipBounds The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.
   * @param options Describes the rasterization options.
   */
  rasterize(
    sourceArt: any,
    clipBounds?: Rect,
    options?: RasterizeOptions
  ): RasterItem;

  /**
   * Rearrange Artboards in the document.
   * @param artboardLayout Layout of artboards for rearrangement.
   * @param artboardRowsOrCols Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
   * @param artboardSpacing Spacing between artboards.
   * @param artboardMoveArtwork Whether to move artwork with artboards.
   */
  rearrangeArtboards(
    artboardLayout?: DocumentArtboardLayout,
    artboardRowsOrCols?: number,
    artboardSpacing?: number,
    artboardMoveArtwork?: boolean
  ): boolean;

  /**
   * Save the document.
   */
  save(): void;

  /**
   * Save the document with specific save options.
   * @param saveIn The file to save the document in.
   * @param options Options for the file type specified.
   */
  saveAs(saveIn: File, options?: any): void;

  /**
   * Select art objects in active artboard.
   */
  selectObjectsOnActiveArtboard(): boolean;

  /**
   * Selects a predefined preset to define grid for the current document.
   * @param perspectivePreset Name of perspective grid preset.
   */
  selectPerspectivePreset(perspectivePreset: string): boolean;

  /**
   * Sets the active perspective plane for the active grid of the document.
   * @param perspectiveGridPlane Type of perspective grid plane.
   */
  setPerspectiveActivePlane(
    perspectiveGridPlane: PerspectiveGridPlaneType
  ): boolean;

  /**
   * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.
   */
  showPerspectiveGrid(): boolean;

  /**
   * Capture the current document window to the target TIFF image file.
   * @param imageFile The TIFF file to which the captured image should be written.
   * @param windowSize The size to make the window before capture.
   */
  windowCapture(imageFile: File, windowSize: Point | [number, number]): void;
}
