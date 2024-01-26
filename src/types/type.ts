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
};

export interface Show {
  id: number;
  title: string;
  image: string;
}

export interface Data {
  dumbData: Show[];
  myList: (Show | {id: number; title: string; image?: undefined})[];
  previews: Show[];
}
