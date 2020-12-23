export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [...state.friends, action.friend],
      };

    case "REMOVE_FRIEND":
      const removalIndex = state.friends.findIndex(
        (friend) => friend.id === action.id
      );
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, removalIndex),
          ...state.friends.slice(removalIndex + 1),
        ],
      };

    default:
      return state;
  }
}

// When adding a friend, the action will include a friend key assigned to an object with name, hometown, and id keys.

// When our reducer receives "ADD_FRIEND", it should return a new state with this friend object added to the friends array.
