import randomValueHex from "./helpers";
import countryList from "./countries";

export default [
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Text input",
    type: "text",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "TextInput",
    reportComponent: "TextInputReport",
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: false,
    isUrl: false,
    copyTextFromInitialAssessment: false
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Hidden input",
    type: "hidden",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "HiddenInput",
    reportComponent: "HiddenInputReport",
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: false,
    isUrl: false
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "First and last name",
    type: "first_last_name",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "TextInput",
    reportComponent: "TextInputReport",
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: true
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Textarea input",
    type: "textarea",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "TextareaInput",
    reportComponent: "TextareaInputReport",
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: false,
    copyTextFromInitialAssessment: false
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Select input",
    type: "select",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "SelectInput",
    reportComponent: "SelectInputReport",
    options: [],
    disableForScoring: false,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: false,
    multiple: false,
    scoreGraphColor: ""
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "LOC dimensions select input",
    type: "radio_loc",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "LOCSelectInput",
    reportComponent: "LOCSelectInputReport",
    options: [],
    disableForScoring: false,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: false,
    multiple: false,
    scoreGraphColor: "",
    showAnswer: true,
    showDimensions: true,
    dimensionsLabel: ""
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Countries",
    type: "select",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "Select country",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "CountryInput",
    reportComponent: "CountryInputReport",
    options: countryList,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: false,
    multiple: false,
    labelParts: [
      {
        name: "Country name",
        key: "name"
      }
    ],
    labelPartsSeperator: "-"
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Assessments",
    type: "select",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "Select assessment",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    roleConditions: [],
    required: false,
    canRemove: true,
    component: "AssessmentsInput",
    reportComponent: "AssessmentsInputReport",
    options: ["author", "administrator"],
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px",
    includeInAssessmentTitle: false,
    multiple: false,
    queryParameterField: null
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Date input",
    type: "date",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    defaultValueCurrentDate: false,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "DateInput",
    reportComponent: "DateInputReport",
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    placeholder: "",
    maxWidth: null,
    maxWidthUnit: "px"
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Radio input",
    type: "radio",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "RadioInput",
    reportComponent: "RadioInputReport",
    options: [],
    disableForScoring: false,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    includeInAssessmentTitle: false,
    maxWidth: null,
    maxWidthUnit: "px",
    scoreGraphColor: null
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Radio grid input",
    type: "radio_grid",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    defaultValue: null,
    label: "",
    reportLabel: "",
    conditions: [],
    relatedQuestions: [],
    required: false,
    canRemove: true,
    component: "RadioGridInput",
    reportComponent: "RadioGridInputReport",
    optionsHorizontal: [],
    optionsVertical: [],
    disableForScoring: false,
    minScore: null,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    selectedGraph: [
      {
        label: "Pie",
        key: "pie"
      }
    ],
    maxWidth: null,
    maxWidthUnit: "px",
    height: null,
    heightUnit: "px",
    scoreGraphColor: null
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "File upload",
    type: "file_upload",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "",
    reportLabel: "",
    conditions: [],
    component: "FileUpload",
    reportComponent: "FileUploadReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    maxSize: null,
    maxFiles: 1,
    acceptedFileTypes: []
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Page",
    type: "page",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    conditions: [],
    component: "Page",
    reportComponent: "Page",
    canRemove: true,
    items: [],
    class: "",
    nextButtonText: "",
    previousButtonText: "",
    hidden: false,
    hideInForm: false,
    excludeForScoreComparing: false,
    showTitle: false,
    maxWidth: null,
    maxWidthUnit: "px"
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Row",
    type: "row",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    conditions: [],
    component: "Row",
    reportComponent: "Row",
    canRemove: true,
    items: [],
    hidden: false,
    hideInForm: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px"
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Items holder",
    type: "column",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    conditions: [],
    component: "Column",
    reportComponent: "Column",
    canRemove: true,
    items: [],
    hidden: false,
    hideInForm: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px"
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Paragraph",
    type: "paragraph",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "",
    reportLabel: "",
    conditions: [],
    component: "Paragraph",
    reportComponent: "Paragraph",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    hideIfFormCompleted: null
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Part score",
    type: "part_score",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "Part score",
    reportLabel: "",
    conditions: [],
    component: "PartScore",
    reportComponent: "PartScoreReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    hideLabels: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    height: null,
    heightUnit: "px",
    selectedResultType: [
      {
        label: "Score",
        key: "score"
      }
    ]
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Total score",
    type: "total_score",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "Total score",
    reportLabel: "",
    conditions: [],
    component: "TotalScore",
    reportComponent: "TotalScoreReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    hideLabels: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    height: null,
    heightUnit: "px",
    selectedResultType: [
      {
        label: "Score",
        key: "score"
      }
    ]
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Aggregation",
    type: "aggregation",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "Aggregation",
    reportLabel: "",
    conditions: [],
    component: "Aggregation",
    reportComponent: "AggregationReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    hideLabels: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    height: null,
    heightUnit: "px",
    selectedInputs: [],
    selectedResultType: [
      {
        label: "Score",
        key: "score"
      }
    ]
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Flat Aggregation",
    type: "flat_aggregation",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "Flat Aggregation",
    reportLabel: "",
    conditions: [],
    component: "FlatAggregation",
    reportComponent: "FlatAggregationReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    hideLabels: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    height: null,
    heightUnit: "px",
    selectedInputs: [],
    selectedResultType: [
      {
        label: "Score",
        key: "score"
      }
    ]
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Compare score",
    type: "compare_score",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "Compare score",
    reportLabel: "",
    conditions: [],
    component: "CompareScore",
    reportComponent: "CompareScoreReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    hideLabels: false,
    currentResult: true,
    currentResultLabel: "Current result",
    reviewedResultLabel: "Reviewed result",
    previousResult: true,
    previousResultLabel: "Previous result",
    firstResult: false,
    firstResultLabel: "First result",
    userResults: false,
    userResultsLabel: "User results",
    countryResults: false,
    countryResultsLabel: "Country results",
    customFieldResults: false,
    customFieldResultsFields: false,
    customFieldResultsLabel: "Matched results",
    allResults: false,
    allResultsLabel: "All results",
    averageResult: false,
    averageResultLabel: "Average result",
    averageUserResult: false,
    averageUserResultLabel: "Average user result",
    averageCountryResult: false,
    averageCountryResultLabel: "Average country result",
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    height: null,
    heightUnit: "px",
    compareScoringTitleField: [],
    selectedResultType: [
      {
        label: "Score",
        key: "score"
      }
    ]
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "Legend",
    type: "legend",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "",
    reportLabel: "",
    conditions: [],
    component: "Legend",
    reportComponent: "LegendReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    legendFor: null
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "LOC Items",
    type: "legend",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "",
    reportLabel: "",
    conditions: [],
    component: "LOCItems",
    reportComponent: "LOCItemsReport",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    maxWidth: null,
    maxWidthUnit: "px",
    legendFor: null
  },
  {
    key: randomValueHex(15),
    reportItemKey: "",
    name: "External element",
    type: "external_element",
    disableExportExcel: false,
    hideValuesInExportExcel: false,
    label: "",
    reportLabel: "",
    conditions: [],
    element: null,
    component: "ExternalElement",
    reportComponent: "",
    canRemove: true,
    hidden: false,
    hideInForm: false,
    newPageInPdf: false,
    class: "",
    legendFor: null
  }
];