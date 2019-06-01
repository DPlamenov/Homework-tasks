<?php

namespace DTO;


class SubjectDTO
{
    /**
     * @var string
     */
    private $subject_name;

    /**
     * @return string
     */
    public function getSubjectName()
    {
        return $this->subject_name;
    }

    /**
     * @param string $subject_name
     */
    public function setSubjectName($subject_name): void
    {
        $this->subject_name = $subject_name;
    }

}