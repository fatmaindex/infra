import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = {
      "sectors": [
        {
          "title": "Energy",
          "span": "",
          "image": "../../../assets/images/English V.5_img6.png"
        },
        {
          "title": "Water",
          "span": "",
          "image": "../../../assets/images/English V.5_img3.png"
        },
        {
          "title": "Transport ",
          "span": "and Logistics Services",
          "image": "../../../assets/images/English V.5_img2.png"
        },
        {
          "title": "Health",
          "span": "",
          "image": "../../../assets/images/English V.5_img4.png"
        },
        {
          "title": "Education",
          "span": "",
          "image": "../../../assets/images/English V.5_img5.png"
        },
        {
          "title": "Communication",
          "span": "Communication & Digital Infrastructure",
          "image": "../../../assets/images/English V.5_img0.png"
        },
        {
          "title": "Municipal Projects",
          "span": "",
          "image": "../../../assets/images/English V.5_img7.png"
        },
        {
          "title": "Energy ",
          "span": "Transition",
          "image": "../../../assets/images/English V.5_img1.png"
        }
      ],
      "objectives": [
        {
          "title": "Broaden",
          "image": "../../../assets/images/English V.5_img13.png"
        },
        {
          "title": "Deepen",
          "image": "../../../assets/images/English V.5_img12.png"
        },
        {
          "title": "Raising",
          "image": "../../../assets/images/English V.5_img11.png"
        },
        {
          "title": "Provide",
          "image": "../../../assets/images/English V.5_img10.png"
        },
        {
          "title": "Accelerate",
          "image": "../../../assets/images/English V.5_img9.png"
        }
      ]
  ,
    
    "news": {
      "newsTitle": "INFRA agrees MoU with Macquarie to boost private sector investment in KSA infrastructure",
      "content": [
      ` Riyadh, 12 February 2024 <br><br>The National Infrastructure Fund (INFRA) today
        announced that it has signed a Memorandum of Understanding (MoU) with
        Macquarie Asset Management(Macquarie) focused on increasing long-term
        institutional and foreign investment in the Kingdom’s high-growth
        infrastructure market.<br><br> INFRA, with its unique local market knowledge, will
        collaborate strategically with Macquarie to identify and progress broad
        sector infrastructure investment opportunities, including those that
        advance the Kingdom’s ambitious energy transition objectives in line with
        the Saudi Green Initiative.<br><br> INFRA will leverage its extensive expertise
        and Macquarie’s global experience as the world’s largest infrastructure
        asset grow long-term private sector participation in the Kingdom’s
        infrastructure market.<br><br> INFRA and Macquarie will also prioritise
        initiatives to promote the participation of women in the infrastructure
        sector and the sharing of Environment, Social and Governance (ESG) best
        practices.<br><br> INFRA was inaugurated by the National Development Fund (NDF)
        and established as a supervised entity of NDF upon the enactment of the
        NIF Law on 6 February 2024.<br><br> INFRA will be chaired by His Excellency Faisal
        F. Alibrahim, Minister of Economy and Planning.<br><br> With the recent enactment
        of the National Infrastructure Fund Law and is eager to see INFRA build on
        its track record and expand its impact through this strategic
        collaboration with Macquarie.<br><br> INFRA’s collaboration with Macquarie and its
        global network of relationships is an important step in growing long-term
        institutional investment across the Kingdom’s infrastructure segment.”<br><br>
        Esmail Alsallom, CEO of INFRA added: “Our strategic collaboration with
        Macquarie is a testament to INFRA’s strategic vision.<br><br> It is an exciting
        step in expanding INFRA’s innovative approach to financing and positioning
        as a key partner to global capital providers.<br><br> We are focused on working
        together to drive the evolution of the Kingdom's infrastructure market and
        supporting the energy transition imperative.”<br><br> Ben Way, Group Head of
        Macquarie Asset Management, said: “As the Kingdom’s economic
        transformation and energy transition gain pace, unlocking private sector
        investment and innovation in local infrastructure will be vital to
        achieving the Kingdom’s Vision 2030 ambitions and beyond.<br><br> We are delighted
        to be partnering with INFRA to contribute to accelerating investments,
        aiming to deliver world-class infrastructure that underpins the Kingdom’s
        dynamic economy and future-looking objectives.”<br><br> Mark Dooley, Global Head
        of Green Investments at Macquarie Asset Management, added: “The
        opportunity to deepen our relationships with like-minded partners in Saudi
        Arabia represents a key growth opportunity for our business.<br><br> The progress
        achieved in the Kingdom, underpinned by its ambitious and highly capable
        workforce, has been impressive so far.<br><br> It is a very exciting time and we
        are honoured to contribute to the transformative initiatives the Kingdom
        is undertaking.” `
      ]
    },
    "members": [

      {
        "name": "HE Dr. Nabeel Alamudi",
        "title": "Board Member",
        "image": "../../../assets/images/image744.png"
      },
      {
        "name": "HE Abdulaziz Alarif",
        "title": "Board Member",
        "image": "../../../assets/images/image758.png"
      },
      {
        "name": "Dr Stephen Paul Groff",
        "title": "Board Member",
        "image": "../../../assets/images/image773.png"
      },
      {
        "name": "Eng. Esmail Alsallom",
        "title": "Board Member",
        "image": "../../../assets/images/image787.png"
      },
      {
        "name": "Ms. Stephanie Von Friedeburg",
        "title": "Board Member",
        "image": "../../../assets/images/image801.png"
      },
      {
        "name": "Ms. Marie Lam-Frendo",
        "title": "Board Member",
        "image": "../../../assets/images/image815.png"
      }
    ]

  };

  getData() {
    return this.data;
  }
}
