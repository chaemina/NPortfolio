import Title from "../../../shared/components/atoms/Title";
import ProjectGrid from "../../../shared/components/organisms/ProjectGrid";
import Frame from "../../../shared/components/organisms/Frame";
export default function Page() {

return (
    <Frame>
         <main className="h-full w-full flex flex-col p-6 md:p-14">
              <div className="w-full mt-[50px] lg:mt-[80px]">
           <Title className="font-bold">Recent Projects</Title>
           <ProjectGrid/>
            </div>
         </main>
    </Frame>
  );
}
