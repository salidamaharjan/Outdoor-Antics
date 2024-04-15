import { gql } from "@apollo/client";
export const MISSION_TYPES = gql`
  query GetAllMissionTypes {
    getAllMissionTypes {
      _id
      name
    }
  }
`;
