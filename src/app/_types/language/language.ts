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
    flow: {
      input_placeholder: string;
    };
  };
  main: {
    header: {
      language: {
        tooltip: string;
      };
      theme: {
        light: string;
        dark: string;
        device: string;
      };
    };
    home: {
      heading: string;
      topic: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
      start_button: string;
    };
    components: {
      top: string;
      button: {
        title: string;
        description: string;
        simple: {
          title: string;
        };
        radio: {
          title: string;
          description: string;
          simple: { title: string };
        };
      };
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
