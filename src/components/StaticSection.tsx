import percentage from "../assets/Percentage.png";
import stats from "../assets/stats.png";
import annotation_pipeline from "../assets/annotation_pipeline.png";
import via_example from "../assets/via_example.png";
import models from "../assets/models.png";
function StaticSection() {
  return (
    <div className="flex flex-col items-center bg-slate-950 text-white p-8">
      <h1 className="text-green-400 text-4xl font-extrabold mb-6 text-center">
        Dataset Description
      </h1>

      {/* Description */}
      <p className="text-lg text-center max-w-4xl leading-relaxed mb-8">
        SiTa is an in-the-wild dataset designed for audio-only speaker
        diarization in Sinhala and Tamil languages. It addresses the lack of
        resources for low-resource South Asian languages by providing authentic
        conversational audio data sourced from publicly available YouTube
        videos. The dataset is divided into two subsets, Sinhala and Tamil,
        featuring multi-speaker dialogues with significant speech activity and
        overlapping speech.
      </p>

      {/* Data Format */}
      <div
        className=" p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">Data Format</h2>
        <ul className="list-disc list-inside">
          <li>Mono-channel WAV format (16 kHz sampling rate)</li>
          <li>
            Annotations: Speaker labels and timestamps provided as RTTM files
          </li>
        </ul>
      </div>

      {/* Dataset Composition */}
      <div
        className=" p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">
          Dataset Composition
        </h2>
        <div className="flex flex-col gap-3">
          <p>
            Percentage distribution of video types selected for data collection
            in Sinhala and Tamil languages is shown below.
          </p>
          <img
            src={percentage}
            alt="Video Categories"
            className="w-full rounded-lg shadow-md"
          />
          <p className="mt-3">
            Dataset statistics such as the number of speakers, duration, and
            overlapped speech percentage can be seen below.
          </p>
          <img
            src={stats}
            alt="Dataset Statistics"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Annotation Pipeline */}
      <div
        className=" p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">
          Annotation Pipeline
        </h2>
        <img
          src={annotation_pipeline}
          alt="Video Categories"
          className="w-full rounded-lg shadow-md"
        />
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>Pre-processing :</strong>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YouTube videos were curated and
          downloaded based on specific search queries and after
          <hr />
          <li>
            <strong>Pyannote 3.1 :</strong>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A pre-trained Pyannote speaker
          diarization model was used to approxmiate generate speaker labels.
          <hr />
          <li>
            <strong>VIA :</strong>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The generated speaker labels were
          manually corrected and validated using the VIA annotation tool.
        </ul>
      </div>

      {/* VIA */}
      <div
        className=" p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">VIA</h2>
        <p className="mb-4">
          VIA annotation tool was used to correct RTTM outputs from Pyannote 3.1
          model. The RTTMs had to be converted to a VIA project to load them
          onto the interface shown. The output from the tool also once again had
          to be converted back to RTTM scripts.{" "}
        </p>
        <img
          src={via_example}
          alt="Video Categories"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* model and evaluation */}
      <div
        className=" p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">
          Models and Evaluation
        </h2>
        <p className="mb-4">
          Both subsets of the dataset were tested on state-of the-art speaker
          diarization models. The results were evaluated using the standard
          metric of Diarization Error Rate (DER). The results were compared with
          the ground truth labels to evaluate the performance of the models.
        </p>
        <img
          src={models}
          alt="Video Categories"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Applications */}
      <div
        className=" p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">Applications</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Speech Processing:</strong> Benchmarking and evaluating
            speaker diarization systems
          </li>
          <li>
            <strong>Linguistic Research:</strong> Analyzing conversational
            dynamics and patterns in Sinhala and Tamil
          </li>
          <li>
            <strong>ASR Development:</strong> Enhancing automatic speech
            recognition (ASR) systems in multilingual environments
          </li>
        </ul>
      </div>

      {/* Conference & Workshop Information */}
      <div
        className=" p-6 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">
          Conference & Workshop Information
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Conference:</strong> Co-located with the 31st International
            Conference on Computational Linguistics (COLING 2025)
          </li>
          <li>
            <strong>Workshop:</strong> CHiPSAL: Challenges in Processing South
            Asian Languages
          </li>
        </ul>
      </div>

      {/* Dataset Access & License */}
      <div
        className="p-6 rounded-lg shadow-md w-full max-w-4xl"
        style={{ backgroundColor: "#00363d" }}
      >
        <h2 className="text-green-400 text-2xl font-bold mb-4">
          Dataset Access & License
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>License:</strong> The dataset is licensed under an extended
            version of the CC BY-NC 4.0 license.{" "}
            <a
              href="https://github.com/SiTa-SpeakerDiarization/SiTa/blob/main/LICENSE.txt"
              className="text-green-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full license terms
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="https://github.com/SiTa-SpeakerDiarization/SiTa"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
          <a
            href="https://rtuthaya.staff.uom.lk/resources/dataset/44"
            className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Dataset
          </a>
        </div>
      </div>
    </div>
  );
}

export default StaticSection;
