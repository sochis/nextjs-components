export type Language = "en" | "ja";

export interface LangParams {
  language: Language;
}

export interface I18nParams {
  product: {
    title: string;
    landing_title: string;
  };
  common: {
    navigation_rail: {
      automation_title: string;
    };
  };
  main: {
    home: {
      test: string;
    };
  };
  landing: {
    ip_label: string;
    ip_hint: string;
    ip_description: string;
    ip_error_msg: string;
    ip_submit: string;
  };
}
