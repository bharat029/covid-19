import { State, Selector } from '@ngxs/store';
import { StoriesStateModel } from './stories.model';
import { Injectable } from '@angular/core';

@State<StoriesStateModel>({
  name: 'stories',
  defaults: {
    stories: [
      {
        title: 'Corona Virus Recovered Patients Share Stories Of Survival And Hope',
        desc: 'Desc',
        paras:[
          `Two COVID-19 survivors, who have been discharged from Odisha hospital, after their complete recovery on Monday urged people not to lose hope on the system and follow government guidelines to defeat the coronavirus pandemic.`,
          `The duo had tested positive to COVID-19 during screening even though they had no such flu symptoms.`,
          `"From the very beginning, I was not worried because I had no symptoms. I would like to thank doctors and nurses for detecting COVID-19 in me and doing proper treatment so that I recovered fully," said the survivor from Jajpur, who is a 'Maulana', a religious preacher.`,
          `Apart from abiding the guidelines, one should develop self-confidence to defeat the disease, the Jajpur survivor said, adding that doctors, nurses and family members boost his mental courage which helped him a lot.`,
          `Similarly, a resident of Pipili area in Puri district, who is also a Nizamiddun returnee, said that early detection of the virus helped him to overcome the disease. He is a postman.`,
          `"I am grateful to Allah for giving me a new lease of life. I was under severe mental stress after getting to know about the COVID-19 status. However, the people around me like doctors and nurses all along told me that I will recover and they proved right," he said.`,
          `He urged all to follow the social distancing norms, wash hands frequently, stay home and obey government guidelines to defeat the COVID-19 pandemic.`,
          `Indian-origin COVID-19 survivor in UK says lucky to be alive`,
          `"I almost died," recalls Indian-origin Ria Lakhani, still struggling to breath normally, days after surviving a severe case of coronavirus that has killed over 7,000 people in the UK.`,
          `"It (breathing) used to be such a natural action but now I have to remember how to inhale and exhale," the BBC quoted her as saying from her home in north-west London.`,
          `In self-isolation, she still cannot hug her husband, or see her parents and siblings. She still wakes up at night struggling to breathe.`,
          `Lakhani, a sales executive, started to show symptoms of Covid-19 while in hospital, where she was admitted for an operation and later tested positive for coronavirus.`,
          `She said her recovery has been slow. In hospital she could barely move at first and was given morphine on top of the oxygen because of the pain.`,
          `She praised the medical staff who treated her. They are "true heroes," she said.`,
          `"It was the small wins and things like the nurses making sure Iris had a constant supply of hot tea and a sneaky extra slice of cake that made me smile."`,
          `But she's relieved that she was able to fight the virus, especially considering how many people have died.`,
          `'Medical care, patient's willpower helped septuagenarian recover`,
          `A 73-year-old Delhi man with co-morbid conditions has recovered from COVID-19 and doctors have attributed his survival to medical care and the patient's "willpower to live".`,
          `Manmohan Singh, a resident of Jangpura area in south Delhi, was discharged on Tuesday after undergoing treatment for COVID-19 at the LNJP Hospital.`,
          `"He has so many co-morbid conditions resulted to old age, from ailments in heart, kidney to blood pressure and coronary heart conditions. It was his will power to live that pulled him through," Medical Superintendent of the hospital, J C Passey said.`,
          `He attributed his recovery to patient care given by doctors at the hospital, high-quality equipment, and the patient's fighting spirit.`,
        ],
        imgUrl: 'assets/images/download.png'
      },
    ]
  }
})
@Injectable()
export class StoriesState {
  @Selector()
  static getStories(state: StoriesStateModel) {
    return state.stories;
  }
}
