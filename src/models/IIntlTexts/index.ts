export interface ILanguageDetails {
  header: {
    hdrHome: string;
    hdrAboutUs: string;
    hdrServices: string;
    hdrVehicles: string;
    hdrCustomers: string;
    hdrContact: string;
    hdrLanguages: {
      language: string;
      languageName: string;
    }[];
  };
  hero: {
    hroTitle: string;
    hroSubtitle: string;
    hroAltBadge: string;
  };
  secAboutUs: {
    subCompany: {
      title: string;
      text: string[];
    };
    subService: {
      title: string;
      text: string[];
      list: string[];
    };
  };
  secServices: {
    subEvents: {
      title: string;
      text: string[];
    };
    subReceptive: {
      title: string;
      text: string[];
    };
    subCityTours: {
      title: string;
      text: string[];
    };
    subHosting: {
      title: string;
      text: string[];
    };
  };
  secVehicles: {
    title: string;
    text: string[];
  };
  secCustomers: {
    title: string;
  };
  secContact: {
    subCallUs: {
      title: string;
      text: string[];
      phones: string[];
    };
    subForm: {
      fields: {
        label: string;
        placeholder: string;
      }[];

      button: string;
    };
  };
  footer: {
    text: string[];
  };
}

export interface ITranslations {
  [key: string]: ILanguageDetails;
}
