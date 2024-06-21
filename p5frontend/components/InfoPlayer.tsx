import { actionGetPlayerInfoFromVGId, actionGetVg } from "@/actions/videogames";

interface infoPlay {
    hoursPlayed: Number | null;
    AchievementsUnlocked: Number | null;
}

export const infoP = (vgId: string) => {
    return actionGetPlayerInfoFromVGId(vgId);
}

export default function InfoPlayerPage(infoP: infoPlay) {
  }

  return (
    <div>
        <p> Hours Played: {}</p>
    </div>
  );
}