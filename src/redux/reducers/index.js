import { LOAD_ADMIN } from 'redux/actions';

const initialState = {
    admin: null,
    contents: [
        {
            content_id: 4,
            title: "Lazy Look For Curly Hair",
            tags: ["Hair", "Curly Hair", "Tutorial"],
            comments: 5,
            likes: 18,
            creator: "Natalie Portman",
            published: "04/01/19"
        },
        {
            content_id: 3,
            title: "Quick Bun Hairstyle For Short Hair",
            tags: ["Hair", "Short Hair", "Tutorial"],
            comments: 12,
            likes: 21,
            creator: "Julia Roberts",
            published: "03/24/19"
        },
        {
            content_id: 2,
            title: "Every Day Skin Care Routine",
            tags: ["Skin", "Skin Care"],
            comments: 14,
            likes: 29,
            creator: "Angelina Jolie",
            published: "03/22/19"
        },
        {
            content_id: 1,
            title: "Natural Makeup Tutorial",
            tags: ["Makeup", "Natural Makeup", "Tutorial"],
            comments: 29,
            likes: 58,
            creator: "Halle Berry",
            published: "03/15/19"
        }
    ],
    users: [
        {
            user_id: 1,
            firstName: "Taylor",
            lastName: "Swift",
            email: "TSwift@gmail.com",
            gender: "Female",
            race: "Caucasian",
            hairType: "Curly",
            skinType: "Dry",
            comments: "13",
            likes: "22",
            joined: "03/01/19"
        },
        {
            user_id: 2,
            firstName: "Kim",
            lastName: "Kardashian",
            email: "KKardashian@gmail.com",
            gender: "Female",
            race: "Caucasian",
            hairType: "Wavy",
            skinType: "Oily",
            comments: "9",
            likes: "20",
            joined: "03/14/19"
        },
        {
            user_id: 3,
            firstName: "Megan",
            lastName: "Fox",
            email: "MFox@gmail.com",
            gender: "Female",
            race: "Caucasian",
            hairType: "Straight",
            skinType: "Oily",
            comments: "8",
            likes: "17",
            joined: "03/15/19"
        },
        {
            user_id: 4,
            firstName: "Beyonce",
            lastName: "Knowles",
            email: "BKnowles@gmail.com",
            gender: "Female",
            race: "African American",
            hairType: "Curly",
            skinType: "Combination",
            comments: "5",
            likes: "11",
            joined: "03/21/19"
        },
        {
            user_id: 5,
            firstName: "Mila",
            lastName: "Kunis",
            email: "MKunis@gmail.com",
            gender: "Female",
            race: "Caucasian",
            hairType: "Straight",
            skinType: "Dry",
            comments: "3",
            likes: "5",
            joined: "03/29/19"
        }
    ],
    subscribers: [
        {
            user_id: 1,
            firstName: "Taylor",
            lastName: "Swift",
            email: "TSwift@gmail.com",
            lastProductChoice: "A",
            start: "03/01/19",
            end: "None",
            active: true,
            cancellationReason: "None"
        },
        {
            user_id: 2,
            firstName: "Kim",
            lastName: "Kardashian",
            email: "KKardashian@gmail.com",
            lastProductChoice: "B",
            start: "03/14/19",
            end: "None",
            active: true,
            cancellationReason: "None"
        },
        {
            user_id: 3,
            firstName: "Megan",
            lastName: "Fox",
            email: "MFox@gmail.com",
            lastProductChoice: "C",
            start: "03/15/19",
            end: "None",
            active: true,
            cancellationReason: "None"
        }
    ]
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ADMIN:
            return Object.assign({}, state, {
                admin: action.admin
            })

        default:
            return state
      }
};