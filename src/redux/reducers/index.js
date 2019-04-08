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