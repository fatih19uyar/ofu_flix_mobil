import {RootState} from '..';

export interface ContentItem {
  id: number;
  title: string;
  image: string;
  desc?: string;
}
export interface ContentState {
  myList: ContentItem[];
  previews: ContentItem[];
  dumpData: ContentItem[];
  selectedContent: ContentItem | null;
}

export interface AsyncThunkConfig {
  state: RootState;
}
