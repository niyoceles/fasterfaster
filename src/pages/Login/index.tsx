import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './style.css';

const Login: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				<ExploreContainer />
			</IonContent>
		</IonPage>
	);
};

export default Login;
