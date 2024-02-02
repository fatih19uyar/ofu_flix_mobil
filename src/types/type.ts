export type RootStackParamList = {
  DashBoard: {} | undefined;
  Login: {} | undefined;
  Home: {} | undefined;
  Register: {} | undefined;
  TvShows: {} | undefined;
  Movies: {} | undefined;
  MyList: {} | undefined;
  ModalCastConnect: {} | undefined;
  TabNavigation: {} | undefined;
  ModalAddProfile: {} | undefined;
  MoreNotifications: {} | undefined;
  MoreMyList: {} | undefined;
  MoreAppSettings: {} | undefined;
  ModalWebView: {url: string} | undefined;
  ModalManageProfiles: {} | undefined;
  StackAuth: {} | undefined;
  RegisterScreen : {} | undefined;
  LoginScreen : {} | undefined;
  ForgotPasswordScreen : {} | undefined;
  ResetPasswordScreen : {} | undefined;
  ProfileSelectionScreen : {} | undefined;
  AppNavigation: {} | undefined;
};

export interface Show {
  id: string;
  title: string;
  image: string;
  desc: string;
}

export interface Data {
  dumbData: (Show | {id: string; title: string; image?: undefined, desc?: string})[];
  myList: (Show | {id: string; title: string; image?: undefined, desc?: string})[];
  previews: (Show | {id: string; title: string; image?: undefined, desc?: string})[];
}
