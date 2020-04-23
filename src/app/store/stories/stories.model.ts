export interface StoriesStateModel {
  stories: IStory[],
}

export interface IStory {
  title: string,
  desc: string,
  paras: string[],
  imgUrl?: string,
  youtubeUrl?: string,
}