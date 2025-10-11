// TODO: Use this for teaching forms (no admin stuff)
// Toggle within EventsPage instead of being separate page in router?

import { useState } from "react"
import { useNavigate } from "react-router";
import InputErrorMessage from "../../common/user-input/InputErrorMessage";
import TextInput from "../../common/user-input/TextInput";

let initialData = {
    eventId: null,
    firstName: '',
    lastName: '',
    email: '',
    numberOfGuests: 0,
}

let errorMessages = {
	firstNameRequired: 'First name is required.',
	lastNameRequired: 'Last name is required.',
	emailRequired: 'Email is required.',
	numberOfGuestsRequired: 'The number of guests must be at least 1.',
};

const EventRegistrationForm = () => {

    const [ data, setData ] = useState(initialData);
    const [hasErrors, setHasErrors] = useState(false);

    const navigate = useNavigate();

    const handleDataChange = (event) => {
        let updatedData = {
            ...data,
            [event.target.id]: event.target.value,
        }
        setData(updatedData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!firstName || !lastName || !email || !numberOfGuests) {
            setHasErrors(true);
        } else {
            navigate("/events");
        }
    }

    // FIXME: This form uses a lot of Bootstrap classes
    return (
			<main className="main-content">
				<h3>Register for an Event</h3>
				<form>
					<div className="container">
						<div className="row">
							<div className="form-item col-8">
								<TextInput
									id="firstName"
									label="First Name"
									value={data.firstName}
									handleChange={handleDataChange}
								/>
								<InputErrorMessage
									hasError={hasErrors && data.firstName === ''}
									msg={errorMessages['firstNameRequired']}
								/>
							</div>
							<div className="form-item col-8">
								<TextInput
									id="lastName"
									label="Last Name"
									value={data.lastName}
									handleChange={handleDataChange}
								/>
								<InputErrorMessage
									hasError={hasErrors && data.lastName === ''}
									msg={errorMessages['lastNameRequired']}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-item col-2">
								<TextInput
									id="yearCreated"
									label="Year Created"
									value={detailsData.yearCreated}
									handleChange={handleDetailsChange}
								/>
								<InputErrorMessage
									hasError={hasErrors && detailsData.yearCreated === ''}
									msg={errorMessages['yearCreatedRequired']}
								/>
							</div>
							<div className="form-item col-4">
								<TextInput
									id="media"
									label="Media"
									value={detailsData.media}
									handleChange={handleDetailsChange}
								/>
								<InputErrorMessage
									hasError={hasErrors && detailsData.media === ''}
									msg={errorMessages['mediaRequired']}
								/>
							</div>
							<div className="form-item col-2">
								<TextInput
									id="height"
									label="Height (in.)"
									value={detailsData.height}
									handleChange={handleDetailsChange}
								/>
								<InputErrorMessage
									hasError={hasErrors && detailsData.height === 0}
									msg={errorMessages['heightRequired']}
								/>
							</div>
							<div className="form-item col-2">
								<TextInput
									id="width"
									label="Width (in.)"
									value={detailsData.width}
									handleChange={handleDetailsChange}
								/>
								<InputErrorMessage
									hasError={hasErrors && detailsData.width === 0}
									msg={errorMessages['widthRequired']}
								/>
							</div>
							<div className="form-item col-2">
								<TextInput
									id="depth"
									label="Depth (in.)"
									value={detailsData.depth}
									handleChange={handleDetailsChange}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-item col">
								<TextArea
									id="description"
									label="Description"
									value={detailsData.description}
									handleChange={handleDetailsChange}
								/>
								<InputErrorMessage
									hasError={hasErrors && detailsData.description === ''}
									msg={errorMessages['descriptionRequired']}
								/>
							</div>
							<div className="col">
								<div className="row">
									<div className="form-item col">
										<TextInput
											id="imageId"
											label="Image ID"
											value={detailsData.imageId}
											handleChange={handleDetailsChange}
										/>
										<InputErrorMessage
											hasError={hasErrors && detailsData.imageId === ''}
											msg={errorMessages['imageIdRequired']}
										/>
									</div>
								</div>
								<div className="row">
									<h3>Categories</h3>
									<InputErrorMessage
										hasError={hasErrors && checkboxes.length === 0}
										msg={errorMessages['categoryRequired']}
									/>
									<div className="form-item col">{categoryChoicesJSX}</div>
								</div>
							</div>
						</div>
					</div>

					<button type="submit" onClick={handleSubmit}>
						Complete Registration
					</button>
				</form>
			</main>
    )
}

export default EventRegistrationForm;
