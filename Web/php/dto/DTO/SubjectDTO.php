<?php

namespace DTO;


class SubjectDTO
{
    private $subject_name;

    /**
     * @return mixed
     */
    public function getSubjectName()
    {
        return $this->subject_name;
    }

    /**
     * @param mixed $subject_name
     */
    public function setSubjectName($subject_name): void
    {
        $this->subject_name = $subject_name;
    }

}