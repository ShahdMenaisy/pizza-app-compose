import styles from './Login.module.css'
import Body from '../UI/Component/Body';
import ScreenContainer from '../UI/Screens/ScreenContainer';
import InformationSection from '../UI/Component/InformationSection';
import FormSection from '../UI/Component/FormSection';
import InputGroup from '../UI/Component/InputGroup';
import FormSubmitBtn from '../UI/Buttons/FormSubmitBtn';
import LearnMoreBtn from '../UI/Buttons/LearnMoreBtn';

export default function Login() {
    return (
        <Body>
            <ScreenContainer>
                <InformationSection>
                    <h1>Welcome!</h1>
                    <p>
                        Deploy your application seamlessly. Please provide your credentials.
                    </p>
                    <LearnMoreBtn>Learn More</LearnMoreBtn>
                </InformationSection>

                <FormSection>
                    <h2>Login In</h2>
                    <form>
                        <InputGroup>
                            <label>User Name</label>
                            <input type="text" placeholder="TechTree" />
                        </InputGroup>
                        <InputGroup>
                            <label>Password</label>
                            <input type="password" placeholder="********" />
                        </InputGroup>
                        <FormSubmitBtn>Submit</FormSubmitBtn>
                    </form>

                    <div className={styles["social-icons"]}>
                        <a href="https://github.com">
                            <img src="github-icon.png" alt="GitHub" />
                        </a>
                        <a href="https://linkedin.com">
                            <img src="linkedin-icon.png" alt="LinkedIn" />
                        </a>
                    </div>
                </FormSection>
            </ScreenContainer>
        </Body>
    )
}
