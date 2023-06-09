import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();


  const formik = useFormik({
    initialValues: {
      firstname: '',
      email: '',
      type: '',
      comment: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      comment: Yup.string()
        .min(100, 'Must be 100 characters or more')
        .required('Required'),
    }),

    onSubmit: values => {
      // e.preventDefault()
      console.log(formik.values.firstname)
      submit("url", formik.values.firstname);
    },
  })

  useEffect(() => {
    console.log(response);
    response && onOpen(response.type, response.message);
    response && response.type === "success" ? formik.resetForm() : null;
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstname && formik.errors.firstname ? true : false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  variant='flushed'
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstname')}

                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email ? true : false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  variant='flushed'
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}


                />
                {formik.touched.email && formik.errors.email ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : null}

              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  variant='flushed'
                  id="type"
                  name="type"
                  {...formik.getFieldProps('type')}

                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment ? true : false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}

                />
                {formik.touched.comment && formik.errors.comment ? (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                ) : null}
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                {isLoading ? "Loading" : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
