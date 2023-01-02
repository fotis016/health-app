import { Paragraph } from "./Homestyles"
export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = props => {
    return (
      <div>
        <h1 >Home page</h1>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, qui.
          Hic animi distinctio et maiores, ab nostrum at neque. Iusto minus
          perspiciatis vitae unde? In quibusdam nulla perspiciatis laboriosam ex.
        </Paragraph>
      </div>
    )
}
export default HomePage
