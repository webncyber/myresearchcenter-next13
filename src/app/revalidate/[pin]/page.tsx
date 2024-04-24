"use server";
import { revalidateTag } from "next/cache";
import { revalidateAPITag } from "../../../../lib/constants";

export default async function action({ params }: { params: { pin: string } }) {
  if (params.pin == process.env.NEXT_PUBLIC_API_Revalidate_Pin) {
    revalidateTag(revalidateAPITag);
    return (
      <div className="content-section">
        <div className="single-column-content">
          <h2>Revalidate!</h2>
        </div>
      </div>
    );
  }
}
